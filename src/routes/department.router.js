const express = require('express');
const router = express.Router();
const {addDepartment,getAllDepartment,getDepartment,registerAdmin,getAdmin,getFilterDepartment,getAdminOverview} = require('../controllers/department.controller');

router.route('/').post(addDepartment)
                 .get(getFilterDepartment);
router.route('/:departmentCode').get(getDepartment);
router.get('/all',getAllDepartment);
router.route('/admin/:account').post(registerAdmin).get(getAdmin);
router.route('/admin/count').get(getAdminOverview);
// router.post('/schema/',);

module.exports = router;
