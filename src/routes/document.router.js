const express = require('express');
const router = express.Router();
const {uploadDLTemplate} = require('../controllers/document.controller');

router.post('/driving_license', uploadDLTemplate);
module.exports = router;
