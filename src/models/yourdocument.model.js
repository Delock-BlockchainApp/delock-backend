const mongoose = require('mongoose');
const yourDocumentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true 
      },
    folder_id:{
        type: String,
        required: true
    },
    document_name:{
        type: String,
        required: true
    },
    document_hash:{
        type: String,
        required: true
    },

});

      
const YourDocumentSchema = mongoose.model('yourdocument', yourDocumentSchema);
module.exports =  YourDocumentSchema;