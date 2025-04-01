const express = require('express');
const router = express.Router();
const {registerUser,registerUserCredentials,registerYourdocFolder,registerYourdocDocument,getUserCredentials} = require('../controllers/user.controller');
const { get } = require('mongoose');

router.post('/register',registerUser);
router.route('/credential').post(registerUserCredentials)
    .get(getUserCredentials);
router.post('/yourdoc/folder',registerYourdocFolder);
router.post('/yourdoc/document',registerYourdocDocument);


module.exports = router;
