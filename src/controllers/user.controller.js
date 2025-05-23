
const {registerUserDetails,registerUserCredentialDetails,registerYourdocFolderDetails,registerYourdocDocumentDetails,getUserCredentialDetails, getAllYourdocFolderDetails,getAllYourdocDocumentsDetails,getUserDetails,uploadToPinata} = require("../services/user.service");

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await registerUserDetails(data);
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const registerUserCredentials = async (req, res) => {
    try {
        const data = req.body;
        if (!data.user_id) {
            return res.status(400).json({ message: "user_id is required" });
        }
        const user = await registerUserCredentialDetails(data);
        return res.status(201).json({ message: "User credentials registered successfully" });
    } catch (error) {
        console.error("Error in registerUserCredentials:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const registerYourdocFolder = async (req, res) => {
    try {
        const data = req.body;
        const user = await registerYourdocFolderDetails(data);
        return res.status(201).json({ message: "Yourdoc folder registered successfully" });
    } catch (error) {
        console.error("Error in registerYourdocFolder:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const registerYourdocDocument = async (req, res) => {
    try {
      const folderId = req.params.folderId;
      const { document_name, user_id,jwt_token } = req.body;
  
      if (!folderId) {
        return res.status(400).json({ message: "folderId is required" });
      }
      if (!jwt_token || !req.file || !document_name || !user_id) {
        return res.status(400).json({
          message: "file, document_name, and user_id , Api credentils are required.",
        });
    }
    const ipfsHash=await uploadToPinata(req.file,document_name,jwt_token);
    if (!ipfsHash) {
        return res.status(500).json({ message: "Failed to upload file to IPFS" });
    }
    const document_hash = ipfsHash.IpfsHash;
    
    const result = await registerYourdocDocumentDetails({...req.body, folder_id:folderId, document_hash});
    
      return res.status(201).json({
        message: "Yourdoc document registered successfully",
        result,
      });
    } catch (error) {
      console.error("Error in registerYourdocDocument:", error.message);
      return res.status(500).json({
        error: "An error occurred in the controller.",
        details: error.message,
      });
    }
  };
  

const getUserCredentials = async (req, res) => {
    try {
        const userId = req.query.userId;
        // console.log("userId",userId)
        const credentials = await getUserCredentialDetails(userId);
        // console.log("credentials",credentials)
        if (credentials) {
            return res.status(200).json( credentials );
        } else {
            return res.status(404).json({ message: "User credentials not found" });
        }
    }
    catch (error) {
        console.error("Error in getUserCredentials:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const getAllYourdocFolder = async (req, res) => {
    try {
        const userId = req.query.userId;
        
        const folders = await getAllYourdocFolderDetails(userId);
        if (folders) {
            return res.status(200).json( folders );
        } else {
            return res.status(404).json({ message: "Yourdoc folder not found" });
        }
    } catch (error) {
        console.error("Error in getYourdocFolder:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const getAllYourdocDocuments = async (req, res) => {
    try {
        const folderId = req.params.folderId;
        const documents = await getAllYourdocDocumentsDetails(folderId);
        if (documents) {
            return res.status(200).json(documents );
        } else {
            return res.status(404).json({ message: "Yourdoc document not found" });
        }
    } catch (error) {
        console.error("Error in getYourdocDocument:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const address = req.query.address;
        const user = await getUserDetails(address);
        if (user) {
            return res.status(200).json( user );
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error in getUser:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}


module.exports = {
    registerUser,
    registerUserCredentials,
    registerYourdocFolder,
    registerYourdocDocument,
    getUserCredentials,
    getAllYourdocFolder,
    getAllYourdocDocuments,
    getUser
}