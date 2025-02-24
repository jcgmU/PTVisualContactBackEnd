const express = require("express");
const { CustomerController } = require("./controller/customer.controller");

const CustomerRoutes = express.Router();

CustomerRoutes.use(CustomerController);

module.exports = { CustomerRoutes };
