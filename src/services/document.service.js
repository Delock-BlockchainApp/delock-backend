const fs = require("fs");
const ejs = require("ejs");
const puppeteer = require("puppeteer");
const axios = require("axios");
const FormData = require("form-data");
const { Readable } = require("stream");

const generateAndUploadLicense = async (req) => {
    try {
        const jwtToken = process.env.PINATA_JWT_TOKEN; // Your Pinata JWT token
        const Url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
        const data = req.body; // Driving license data

        // Step 1: Render EJS Template
        const template = fs.readFileSync("src/templates/driving_license.ejs", "utf-8");
        const html = ejs.render(template, data);

        // Step 2: Convert HTML to PDF using Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        const pdfBuffer = await page.pdf({ format: "A4" });
        await browser.close();

        const bufferToStream = (buffer) => {
            const stream = new Readable();
            stream.push(buffer);
            stream.push(null); // Signals end of stream
            return stream;
        };
        
        // Step 3: Prepare FormData for Upload
        const formData = new FormData();
        formData.append("file", bufferToStream(pdfBuffer), "driving_license.pdf");

        // Step 4: Upload PDF to Pinata using Axios
        const response = await axios.post(Url, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
            },
        });

        // Step 5: Check response and parse data
        const responseData = response.data;
        console.log("Pinata response:", responseData);

        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
        return ipfsUrl; // Return the IPFS URL
    } catch (error) {
        console.error("Error in generateAndUploadLicense:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        }
        throw new Error("An error occurred during PDF generation or upload.");
    }
};

module.exports = {
    generateAndUploadLicense,
};