const express = require('express');
const router = express.Router();
const {addDepartment,getAllDepartment,getDepartment,registerAdmin,getAdmin} = require('../controllers/department.controller');

router.route('/').post(addDepartment)
                 .get(getDepartment);
router.get('/all',getAllDepartment);
router.route('/admin').post(registerAdmin).get(getAdmin);
// router.post('/schema/',);

module.exports = router;
