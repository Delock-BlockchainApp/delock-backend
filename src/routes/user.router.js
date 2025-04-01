const express = require('express');
const router = express.Router();
const {registerUser,registerUserCredentials} = require('../controllers/user.controller');

router.post('/register',registerUser);
router.post('/credential',registerUserCredentials);


module.exports = router;
