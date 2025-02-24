const CustomerModel = require("../../../models/customer/customer.model");

const customerCreateRepository = async (customer) => {
  const newCustomer = new CustomerModel(customer);
  return await newCustomer.save();
};

const customerListRepository = async () => {
  return await CustomerModel.find();
};

module.exports = {
  customerCreateRepository,
  customerListRepository,
};
