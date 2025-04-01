const mongoose = require('mongoose');
const yourFolderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true 
      },
      folder_name:{
        type: String,
        required: true
    },

});

      
const YourFolderSchema = mongoose.model('yourfolder', yourFolderSchema);
module.exports =  YourFolderSchema;