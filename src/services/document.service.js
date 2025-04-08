const fs = require("fs");
const ejs = require("ejs");
const puppeteer = require("puppeteer");
const axios = require("axios");
const FormData = require("form-data");
const { Readable } = require("stream");
const jwtToken = process.env.PINATA_JWT_TOKEN; // Your Pinata JWT token
const Url = "https://api.pinata.cloud/pinning/pinFileToIPFS"; // Pinata API URL
const DocumentSchema = require("../models/documentCreation.model"); // Import your Mongoose model
const Document = require("../models/document.model"); // Import your Mongoose model

const templateToPdf = async (template,data) => {
    const html = ejs.render(template, data);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        const pdfBuffer = await page.pdf({ format: "A4" ,printBackground: true});
        await browser.close();
        return pdfBuffer;
}

const generateAndUploadDL = async (req) => {
    try {
        
        const data = req.body; // Driving license data

        const template = fs.readFileSync("src/templates/driving_license.ejs", "utf-8");
        const bufferData = await templateToPdf(template,data);
        const bufferToStream = (buffer) => {
            const stream = new Readable();
            stream.push(buffer);
            stream.push(null); // Signals end of stream
            return stream;
        };
        const formData = new FormData();
        formData.append("file", bufferToStream(bufferData), `${data.name}_driving_license.pdf`);

        // Step 4: Upload PDF to Pinata using Axios
        const response = await axios.post(Url, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
            },
        });

        const responseData = response.data;
        console.log("Pinata response:", responseData);

        //const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
        return responseData; // Return the IPFS URL
    } catch (error) {
        console.error("Error in generateAndUploadLicense:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        }
        throw new Error("An error occurred during PDF generation or upload.");
    }
};

const generateAndUploadPancard = async (req) => {
    try {
        const data = req.body; // Pancard data

        const template = fs.readFileSync("src/templates/pancard.ejs", "utf-8");
        const bufferData = await templateToPdf(template, data);
        const bufferToStream = (buffer) => {
            const stream = new Readable();
            stream.push(buffer);
            stream.push(null); // Signals end of stream
            return stream;
        };
        const formData = new FormData();
        formData.append("file", bufferToStream(bufferData), `${data.name}_pancard.pdf`);

        // Step 4: Upload PDF to Pinata using Axios
        const response = await axios.post(Url, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
            },
        });

        const responseData = response.data;
        console.log("Pinata response:", responseData);

        //const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
        return responseData; // Return the IPFS URL
    } catch (error) {
        console.error("Error in generateAndUploadPancard:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        }
        throw new Error("An error occurred during PDF generation or upload.");
    }
}

const generateAndUploadSample = async (req) => {
    try {
        const data = req.body; // Sample data

        const template = fs.readFileSync("src/templates/template3.ejs", "utf-8");
        const bufferData = await templateToPdf(template, data);
        const bufferToStream = (buffer) => {
            const stream = new Readable();
            stream.push(buffer);
            stream.push(null); // Signals end of stream
            return stream;
        };
        const formData = new FormData();
        formData.append("file", bufferToStream(bufferData), `${data.name}_${data.documentName}.pdf`);

        // Step 4: Upload PDF to Pinata using Axios
        const response = await axios.post(Url, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
            },
        });

        const responseData = response.data;
        console.log("Pinata response:", responseData);

        //const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
        return responseData; // Return the IPFS URL
    } catch (error) {
        console.error("Error in generateAndUploadSample:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        }
        throw new Error("An error occurred during PDF generation or upload.");
    }
}

const addDocumentSchemaDetails = async (data) => {
    try {
        const { department_code, document_id, document_name, document_schema } = data;
        const newDocument = new DocumentSchema({
            department_code,
            document_id,
            document_name,
            document_schema,
        });
        const result = await newDocument.save();
        return result;
    } catch (error) {
        console.error("Error in addDocumentSchemaDetails:", error.message);
        throw new Error("An error occurred while adding document schema details.");
    }
}  

const getDocumentSchemaDetails = async (documentId) => {
    try {
        const documentSchema = await DocumentSchema.findOne({ document_id: documentId });
        return documentSchema;
    } catch (error) {
        console.error("Error in getDocumentSchemaDetails:", error.message);
        throw new Error("An error occurred while retrieving document schema details.");
    }
}

const getDocumentsDetails = async (departmentId) => {
    try {
        const documents = await Document.find({ department_id: departmentId });
        return documents;
    } catch (error) {
        console.error("Error in getDocumentsDetails:", error.message);
        throw new Error("An error occurred while retrieving documents.");
    }
}

module.exports = {
    generateAndUploadDL,
    generateAndUploadPancard,
    generateAndUploadSample,
    addDocumentSchemaDetails,
    getDocumentSchemaDetails,
    getDocumentsDetails
    
};