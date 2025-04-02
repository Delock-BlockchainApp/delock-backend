const express = require('express');
const router = express.Router();
const {registerUser,registerUserCredentials,registerYourdocFolder,registerYourdocDocument,getUserCredentials,getAllYourdocFolder,getAllYourdocDocuments} = require('../controllers/user.controller');
const { get } = require('mongoose');

router.post('/register',registerUser);
router.route('/credential').post(registerUserCredentials)
    .get(getUserCredentials);
router.route('/yourdoc/folder').post(registerYourdocFolder)
    .get(getAllYourdocFolder);
router.route('/yourdoc/document').post(registerYourdocDocument)
    .get(getAllYourdocDocuments);


module.exports = router;
