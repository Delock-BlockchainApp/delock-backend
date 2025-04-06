const mongoose = require('mongoose');
const { create } = require('./user.model');


const yourDocumentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User', 
        required: true 
    },
    folder_id: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'yourdocfolder', 
        required: true 
    },
    document_name: {
        type: String,
        required: true
    },
    document_hash: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        }
    }
});

      
const YourDocumentSchema = mongoose.model('yourdocument', yourDocumentSchema);
module.exports =  YourDocumentSchema;