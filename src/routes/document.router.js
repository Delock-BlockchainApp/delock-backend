const express = require('express');
const router = express.Router();
const {uploadDLTemplate,uploadPancardTemplate,addDepartment,getAllDepartment,getDepartment} = require('../controllers/document.controller');

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);
router.post('/add_department',addDepartment);
router.get('/get_all_department',getAllDepartment);
router.get('/get_department',getDepartment);
module.exports = router;
