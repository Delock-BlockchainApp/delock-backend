const User = require("../models/user.model"); 
const Credential = require("../models/ipfscredentials.models");

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


module.exports = {
    registerUserDetails,
    registerUserCredentialDetails
}