const mongoose = require('mongoose');
const ipfsCredentialSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true 
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