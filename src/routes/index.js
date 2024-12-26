const express = require('express');
const routes = express.Router();
const TemplateRouter = require('./template.router');
routes.use('/template',TemplateRouter);

module.exports = routes;