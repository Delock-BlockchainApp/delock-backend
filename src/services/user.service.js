const User = require("../models/user.model"); 

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

module.exports = {
    registerUserDetails
}