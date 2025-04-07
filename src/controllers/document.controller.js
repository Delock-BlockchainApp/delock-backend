const { generateAndUploadDL,generateAndUploadPancard,generateAndUploadSample,addDocumentSchemaDetails,getDocumentSchemaDetails,getDocumentsDetails } = require("../services/document.service");

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

const uploadSampleTemplate = async (req, res) => {
    try {
        const ipfsData = await generateAndUploadSample(req);
        return res.status(200).json({ message: "PDF generated and uploaded to Pinata", ipfsData });      
}
    catch (error) {
        console.error("Error in uploadSampleTemplate:", error.message);
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
        return res.status(201).json({ message: "Document schema registered successfully", result });
    } catch (error) {
        console.error("Error in registerDocumentSchema:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

const getDocumentSchema = async (req, res) => {
    try{
        const documentId= req.query.documentId;
        const documentSchema = await getDocumentSchemaDetails(documentId);
        if (!documentId) {
            return res.status(400).json({ error: "Document ID is required." });
        }
        if (!documentSchema) {
            return res.status(404).json({ error: "No document schema found." });
        }
        return res.status(200).json( documentSchema );
    }
    catch (error) {
        console.error("Error in getDocumentSchema:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const getDocuments = async (req, res) => {
    try {
      const departmentId = req.query.documentId;
  
      if (!departmentId) {
        return res.status(400).json({ error: "Document ID is required." });
      }

      const documents = await getDocumentsDetails(departmentId);
  
      if (!documents || documents.length === 0) {
        return res.status(404).json({ error: "No document found." });
      }
  
      return res.status(200).json(documents);
    } catch (error) {
      console.error("Error in getDocument:", error.message);
      return res.status(500).json({
        error: "An error occurred in the controller.",
        details: error.message,
      });
    }
  };
  

module.exports = {
    uploadDLTemplate,
    uploadPancardTemplate,
    uploadSampleTemplate,
    registerDocumentSchema,
    getDocumentSchema,
    getDocuments
};