const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/user.controller');
router.post('/user/register',registerUser);