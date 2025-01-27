const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
   
    department_name: {
        type: String,
        required: true 
      },
    issued_state:{
        type: String,
        required: true
    },
    department_description:{
        type: String,
        required: true
    },
    department_url:{
        type: String,
        required: true
    },
    department_type:{
        type: String,
        required: true
    },
    issued_govt:{
        type: String,
        required: true
    },
    department_code:{
        type: String,
        required: true
    },
    documents_issued:{
        type:Array,
    }

    });
      
const Department = mongoose.model('department', departmentSchema);
module.exports = Department;