const express = require('express');
const router = express.Router();
const {addDepartment,getAllDepartment,getDepartment} = require('../controllers/department.controller');

router.route('/').post(addDepartment)
                 .get(getDepartment);
router.get('/all',getAllDepartment);
// router.post('/schema/',);

module.exports = router;
