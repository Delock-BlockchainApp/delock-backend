const mongoose = require('mongoose');
const documentCreationSchema = new mongoose.Schema({
    department_code: {
        type: String,
        required: true 
      },
    document_id:{
        type: String,
        required: true
    },
    document_name:{
        type: String,
        required: true
    },
    form_schema:{
        type: Object,
        required: true
    },
    });

      
const DocumentSchema = mongoose.model('documentschema', documentCreationSchema);
module.exports =  DocumentSchema;