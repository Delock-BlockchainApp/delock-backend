
const {uploadDLTemplate,uploadPancardTemplate,registerDocumentSchema} = require('../controllers/document.controller');

const express = require('express');
const router = express.Router();

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
router.post('/generate/docschema',registerDocumentSchema);


module.exports = router;
