
const Department = require("../models/department.model");

const addDepartmentDetails = async (data) => {
    try {
        const department = new Department(data);
        await department.save();
        return department;
    } catch (error) {   
        console.error("Error in addDepartmentDetails:", error.message);
        throw new Error("An error occurred while adding the department.");
    }
   
}
const getAllDepartmentDetails = async () => {
    try {
        const departments = await Department.find();
        return departments;
    } catch (error) {
        console.error("Error in getDepartmentDetails:", error.message);
        throw new Error("An error occurred while fetching the departments.");
    }
}

const getDepartmentDetails = async (searchkey) => {
    try {
        let query = {};
        if (searchkey) {
            query = {
                $or: [
                    { state: { $regex: searchkey, $options: "i" } },
                    { department_name: { $regex: searchkey, $options: "i" } },
                    { department_code: { $regex: searchkey, $options: "i" } }
                ]
            };
        }
        const departments = await Department.find(query);
        return departments;
    } catch (error) {
        console.error("Error in getDepartmentDetails:", error.message);
        throw new Error("An error occurred while fetching the departments.");
    }
};

module.exports = {
    addDepartmentDetails,
    getAllDepartmentDetails,
    getDepartmentDetails
};