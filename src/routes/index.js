const express = require('express');
const routes = express.Router();
const DocumentRouter = require('./document.router');
routes.use('/api/documents',DocumentRouter);

module.exports = routes;