const { generateAndUploadDL,generateAndUploadPancard,addDepartmentDetails,getDepartmentDetails,getAllDepartmentDetails } = require("../services/document.service");

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


module.exports = {
    uploadDLTemplate,
    uploadPancardTemplate
};