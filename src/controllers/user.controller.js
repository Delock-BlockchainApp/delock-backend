
const {registerUserDetails,registerUserCredentialDetails} = require("../services/user.service");

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

module.exports = {
    registerUser,
    registerUserCredentials
}