const express = require('express');
const routes = express.Router();
const DocumentRouter = require('./document.router');
const UserRouter = require('./user.router');
const DepartmentRouter = require('./department.router');

routes.use('/api/documents',DocumentRouter);
routes.use('/api/users',UserRouter);
routes.use('/api/department',DepartmentRouter);
module.exports = routes;