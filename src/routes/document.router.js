
const {uploadDLTemplate,uploadPancardTemplate,addDepartment,getAllDepartment,getDepartment} = require('../controllers/document.controller');

router.post('/generate/driving_license', uploadDLTemplate);
router.post('/generate/pancard', uploadPancardTemplate);


module.exports = router;
