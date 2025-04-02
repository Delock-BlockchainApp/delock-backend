const mongoose = require('mongoose');
const yourdocFolderSchema = new mongoose.Schema({
      user_id: {
           type: mongoose.Schema.Types.ObjectId,  
           ref: 'User', 
           required: true 
       },
      folder_name:{
        type: String,
        required: true
    },

});

      
const YourdocFolderSchema = mongoose.model('yourdocfolder', yourdocFolderSchema);
module.exports =  YourdocFolderSchema;