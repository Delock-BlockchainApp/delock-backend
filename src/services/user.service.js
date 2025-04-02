const User = require("../models/user.model"); 
const Credential = require("../models/ipfscredentials.model");
const YourdocFolder= require("../models/yourdocfolder.model");
const YourdocDocument = require("../models/yourdocument.model");


const registerUserDetails = async (data) => {
    try {
        const user = new User(data);
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in registerUserDetails:", error.message);
        throw new Error("An error occurred while registering the user.");
    }
}

const registerUserCredentialDetails = async (data) => {
    try {
        const user = new Credential(data);
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in registerUserCredentialDetails:", error.message);
        throw new Error("An error occurred while registering the user credentials.");
    }
}

const registerYourdocFolderDetails = async (data) => {
    try {
        const user = new YourdocFolder(data);
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in registerYourdocFolderDetails:", error.message);
        throw new Error("An error occurred while registering the Yourdoc folder.");
    }
}

const registerYourdocDocumentDetails = async (data) => {
    try {
        const user = new YourdocDocument(data);
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in registerYourdocDocumentDetails:", error.message);
        throw new Error("An error occurred while registering the Yourdoc document.");
    }
}

const getUserCredentialDetails = async (userId) => {
    try {
        const existingCredential = await Credential.findOne({ user_id: userId });
        if (existingCredential) {
            return existingCredential;
        }


    } catch (error) {
        console.error("Error in getUserCredentialDetails:", error.message);
        throw new Error("An error occurred while fetching the user credentials.");
    }
}


const getAllYourdocFolderDetails = async (userId) => {
    try {
        const folders = await YourdocFolder.find({ user_id: userId });
        return folders;
    } catch (error) {
        console.error("Error in getAllYourdocFolderDetails:", error.message);
        throw new Error("An error occurred while fetching the Yourdoc folders.");
    }
}

const getAllYourdocDocumentsDetails = async (folderId) => {
    try {
        const documents = await YourdocDocument.find({ folder_id: folderId });
        return documents;
    } catch (error) {
        console.error("Error in getAllYourdocDocumentsDetails:", error.message);
        throw new Error("An error occurred while fetching the Yourdoc documents.");
    }
}

module.exports = {
    registerUserDetails,
    registerUserCredentialDetails,
    registerYourdocFolderDetails,
    registerYourdocDocumentDetails,
    getUserCredentialDetails,
    getAllYourdocFolderDetails,
    getAllYourdocDocumentsDetails
}