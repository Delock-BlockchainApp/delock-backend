
const Department = require("../models/department.model");
const Admin = require("../models/admin.model");
const User = require("../models/user.model");
const Document = require("../models/document.model");

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
``
const getFilterDepartmentDetails = async (searchkey) => {
    try {
        let query = {};
        if (searchkey) {
            query = {
                $or: [
                    { state: { $regex: searchkey, $options: "i" } },
                    { department_name: { $regex: searchkey, $options: "i" } },
                    { department_id: { $regex: searchkey, $options: "i" } },
                    {keyword: { $regex: searchkey, $options: "i" } }
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

const getDepartmentDetails = async (departmentCode) => {
    try {
        const department = await Department.findOne({ department_id: departmentCode });
        return department;
    } catch (error) {
        console.error("Error in getDepartmentDetails:", error.message);
        throw new Error("An error occurred while fetching the departments.");
    }
};


const addAdminDetails = async (data) => {
    try {
        const department = new Admin(data);
        await department.save();
        return department;
    } catch (error) {   
        console.error("Error in addDepartmentDetails:", error.message);
        throw new Error("An error occurred while adding the department.");
    }
}

const getAdmintDetails = async (account) => {
    try {
        
        const department = await Admin.findOne({ wallet_address: account });
        return department;
    } catch (error) {
        console.error("Error in getDepartmentDetails:", error.message);
        throw new Error("An error occurred while fetching the departments.");
    }
}

const getAdminOverviewDetails = async () => {
    try {
        const departmentsCount= await Department.countDocuments();
        const userCount = await User.countDocuments();
        const documents= await Document.countDocuments();
        return {
            departmentsCount,
            userCount,
            documents,
        };
    } catch (error) {
        console.error("Error in getDepartmentDetails:", error.message);
        throw new Error("An error occurred while fetching the departments.");
    }
}


module.exports = {
    addDepartmentDetails,
    getAllDepartmentDetails,
    getDepartmentDetails,
    getFilterDepartmentDetails,
    addAdminDetails,
    getAdmintDetails,
    getAdminOverviewDetails
};