
const {uploadDLTemplate,uploadPancardTemplate} = require('../controllers/document.controller');

const express = require('express');
const router = express.Router();

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);


module.exports = router;
