const mongoose = require('mongoose');
const Department = require('./department.model');
const adminSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: true 
      },
    department_code:{
        type: String,
        required: true
    },
    wallet_address:{
        type: String,
        required: true,
        unique: true
    },
    });
      
const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;