
const {uploadDLTemplate,uploadPancardTemplate,registerDocumentSchema,getDocumentSchema} = require('../controllers/document.controller');

const express = require('express');
const router = express.Router();

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
router.route('/docschema').post(registerDocumentSchema)
        .get(getDocumentSchema); // Assuming you have a function to get document schema details


module.exports = router;
