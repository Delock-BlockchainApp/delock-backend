const express = require('express');
const router = express.Router();
const {uploadDLTemplate,uploadPancardTemplate,addDepartment,getAllDepartment,getDepartment} = require('../controllers/document.controller');

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
router.post('/department',addDepartment);
router.get('/department/all',getAllDepartment);
router.get('/department',getDepartment);

module.exports = router;
