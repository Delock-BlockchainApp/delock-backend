const mongoose = require('mongoose');
const documentCreationSchema = new mongoose.Schema({
    department_code: {
        type: String,
        required: true 
      },
    document_code:{
        type: String,
        required: true
    },
    document_code:{
        type: String,
        required: true
    },
    document_name:{
        type: String,
        required: true
    },
    });
      
const User = mongoose.model('user', userSchema);
module.exports = User;