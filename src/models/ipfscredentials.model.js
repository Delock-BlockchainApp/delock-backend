const mongoose = require('mongoose');
const ipfsCredentialSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User', 
        required: true ,
        unique: true
    },
    domain:{
        type: String,
        required: true
    },
    api_key:{
        type: String,
        required: true
    }
    });
      
const Ipfs= mongoose.model('ipfscredential', ipfsCredentialSchema);
module.exports = Ipfs;