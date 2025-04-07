const mongoose = require('mongoose');
const documentSchema = new mongoose.Schema({
    department_id:{
        type: String,
        required: true
    },
    document_id:{
        type: String,
        required: true,
        unique: true,
      
    },
    document_name:{
        type: String,
        required: true
    },
    document_description:{
        type: String,
        required: true
    },
    image_url:{
        type: String,
        required: true
    },
    issued_by:{
        type: String,
        required: true
    }    
    });

      
const Document = mongoose.model('document', documentSchema);
module.exports =  Document;

