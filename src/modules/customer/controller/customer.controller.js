const { Router } = require("express");
const { handleResponse } = require("../../../config/handler/handlerResponse");
const { listCustomers, createCustomer } = require("../domain/customer.domain");

const CustomerController = Router();

CustomerController.get("/list", async (req, res) => {
  const customerResult = await listCustomers();
  handleResponse(res, 200, customerResult);
});

CustomerController.post("/create", async (req, res) => {
  const customerResult = await createCustomer(req.body);
  handleResponse(res, 200, customerResult);
});

module.exports = { CustomerController };
