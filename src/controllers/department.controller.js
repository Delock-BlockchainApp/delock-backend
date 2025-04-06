
const { addDepartmentDetails, getAllDepartmentDetails, getDepartmentDetails } = require("../services/department.service");



const addDepartment = async (req, res) => {
    try {
        const data = req.body;
        const departmentData = await addDepartmentDetails(data);
        return res.status(201).json({ message: "Department added successfully" });
    } catch (error) {
        console.error("Error in addDepartment:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

const getAllDepartment = async (req, res) => {
    try {
        const departmentData = await getAllDepartmentDetails();
        return res.status(200).json({ departmentData });
    } catch (error) {
        console.error("Error in getDepartment:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

const getDepartment = async (req, res) => {
    try {
        const searchkey = req.query.searchkey;
        const departmentData = await getDepartmentDetails(searchkey);
        return res.status(200).json( departmentData );
    } catch (error) {
        console.error("Error in getDepartment:", error.message);
        return res.status(500).json({ error: "An error occurred in the controller.", details: error.message });
    }
};

module.exports = {
    addDepartment,
    getAllDepartment,
    getDepartment
};