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
        const credentials = await Credential.findOne({ user_id: userId });
        
        return credentials;
    } catch (error) {
        console.error("Error in getUserCredentialDetails:", error.message);
        throw new Error("An error occurred while fetching the user credentials.");
    }
}

module.exports = {
    registerUserDetails,
    registerUserCredentialDetails,
    registerYourdocFolderDetails,
    registerYourdocDocumentDetails,
    getUserCredentialDetails,
}