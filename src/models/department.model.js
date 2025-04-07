const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: true 
    },
    state: {
        type: String,
        required: true
    },
    department_description: {
        type: String,
        required: true
    },
    department_url: {
        type: String,
    },
    department_id: {
        type: String,
        required: true
    }
});
      
const Department = mongoose.model('department', departmentSchema);
module.exports = Department;