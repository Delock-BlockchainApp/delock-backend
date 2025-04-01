const express = require('express');
const router = express.Router();
const {registerUser,registerUserCredentials,registerYourdocFolder} = require('../controllers/user.controller');

router.post('/register',registerUser);
router.post('/credential',registerUserCredentials);
router.post('/yourdoc/folder',registerYourdocFolder);


module.exports = router;
