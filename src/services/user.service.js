const User = require("../models/user.model"); 
const Credential = require("../models/ipfscredentials.model");
const YourdocFolder= require("../models/yourdocfolder.model");
const YourdocDocument = require("../models/yourdocument.model");
const FormData = require("form-data");
const PINATA_URL = process.env.PINATA_URL; // Pinata API URL
const axios = require("axios");

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
        const user = await Credential.findOneAndUpdate(
            { user_id: data.user_id }, // Search criteria
            data, // Data to update or insert
            { new: true, upsert: true } // Options: return the updated document and create if not found
        );
        return user;
    } catch (error) {
        console.error("Error in registerUserCredentialDetails:", error.message);
        throw new Error("An error occurred while registering or updating the user credentials.");
    }
};

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
        console.log("data",data)
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
const getUserDetails = async (address) => {
    try{
        const user = await User.findOne({ wallet_address: address });
        return user;    
        } 
    catch (error) {
        console.error("Error in getUserDetails:", error.message);
        throw new Error("An error occurred while fetching the user details.");
    }  
}
const fs = require("fs");

const uploadToPinata = async (file,filename,jwt_token) => {
    try {
       
        const formData = new FormData();
        formData.append("file", fs.createReadStream(file.path),filename);

        const response = await axios.post(PINATA_URL, formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Bearer ${jwt_token}`,
            },
        });
        fs.unlinkSync(file.path);
        return response.data;
    } catch (error) {
        console.error("Error uploading to Pinata:", error.message);
        throw new Error("An error occurred while uploading to Pinata.");
    }
}

module.exports = {
    registerUserDetails,
    registerUserCredentialDetails,
    registerYourdocFolderDetails,
    registerYourdocDocumentDetails,
    getUserCredentialDetails,
    getAllYourdocFolderDetails,
    getAllYourdocDocumentsDetails,
    getUserDetails,
    uploadToPinata,
}