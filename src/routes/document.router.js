const express = require('express');
const router = express.Router();
const {uploadDLTemplate,uploadPancardTemplate} = require('../controllers/document.controller');

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
module.exports = router;
