const express = require('express');
const routes = express.Router();
const DocumentRouter = require('./document.router');
const UserRouter = require('./user.router');
routes.use('/api/documents',DocumentRouter);
routes.use('/api/users',UserRouter);

module.exports = routes;