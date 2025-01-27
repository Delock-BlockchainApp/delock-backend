const express = require('express');
const router = express.Router();
const {uploadDLTemplate,uploadPancardTemplate,addDepartment} = require('../controllers/document.controller');

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
router.post('/addDepartment',addDepartment)
module.exports = router;
