const { generateAndUploadLicense } = require("../services/document.service");

const uploadDLTemplate = async (req, res) => {
    try {
        const ipfsUrl = await generateAndUploadLicense(req);
        return res.status(200).json({ message: "PDF generated and uploaded to Pinata", url: ipfsUrl });
    } catch (error) {
        console.error("Error in uploadDLTemplate:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

module.exports = {
    uploadDLTemplate,
};