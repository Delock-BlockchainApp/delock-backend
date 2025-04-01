const mongoose = require('mongoose');
const yourdocFolderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true 
      },
      folder_name:{
        type: String,
        required: true
    },

});

      
const YourdocFolderSchema = mongoose.model('yourdocfolder', yourdocFolderSchema);
module.exports =  YourdocFolderSchema;