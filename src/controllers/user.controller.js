
const {registerUserDetails,registerUserCredentialDetails,registerYourdocFolderDetails,registerYourdocDocumentDetails,getUserCredentialDetails, getAllYourdocFolderDetails,getAllYourdocDocumentsDetails} = require("../services/user.service");

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
        const data = req.body;
        const user = await registerYourdocDocumentDetails(data);
        return res.status(201).json({ message: "Yourdoc document registered successfully" });
    } catch (error) {
        console.error("Error in registerYourdocDocument:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
}

const getUserCredentials = async (req, res) => {
    try {
        const userId = req.query.userId;
        // console.log("userId",userId)
        const credentials = await getUserCredentialDetails(userId);
        // console.log("credentials",credentials)
        if (credentials) {
            return res.status(200).json({ credentials });
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
            return res.status(200).json({ folders });
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
        const folderId = req.query.folderId;
        const documents = await getAllYourdocDocumentsDetails(folderId);
        if (documents) {
            return res.status(200).json({ documents });
        } else {
            return res.status(404).json({ message: "Yourdoc document not found" });
        }
    } catch (error) {
        console.error("Error in getYourdocDocument:", error.message);
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
    getAllYourdocDocuments
}