const express = require('express');
const router = express.Router();
const {addDepartment,getAllDepartment,getDepartment} = require('../controllers/department.controller');

router.post('/department',addDepartment);
router.get('/department/all',getAllDepartment);
router.get('/department',getDepartment);

module.exports = router;
