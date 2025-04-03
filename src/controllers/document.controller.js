const { generateAndUploadDL,generateAndUploadPancard,addDocumentSchemaDetails } = require("../services/document.service");

const uploadDLTemplate = async (req, res) => {
    try {
        const ipfsData = await generateAndUploadDL(req);
        return res.status(200).json({ message: "PDF generated and uploaded to Pinata",  ipfsData });
    } catch (error) {
        console.error("Error in uploadDLTemplate:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};
const uploadPancardTemplate = async (req, res) => {
    try {
        const ipfsData = await generateAndUploadPancard(req);
        return res.status(200).json({ message: "PDF generated and uploaded to Pinata", ipfsData });
    } catch (error) {
        console.error("Error in uploadPancardTemplate:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

const registerDocumentSchema = async (req, res) => {
    try {
        // console.log("Request body:", req.body);
        const result = await addDocumentSchemaDetails(req.body);
        if (!result) {
            return res.status(400).json({ error: "Failed to register document schema." });
        }
        return res.status(200).json({ message: "Document schema registered successfully", result });
    } catch (error) {
        console.error("Error in registerDocumentSchema:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

module.exports = {
    uploadDLTemplate,
    uploadPancardTemplate,
    registerDocumentSchema,
};