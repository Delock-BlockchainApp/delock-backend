const mongoose = require('mongoose');
const yourDocumentSchema = new mongoose.Schema({
    user_id: {
            type: mongoose.Schema.Types.ObjectId,  
            ref: 'User', 
            required: true 
        },
    folder_id:{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'yourdocfolder', 
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