const {
  customerCreateRepository,
  customerListRepository,
} = require("../repository/customer.repository");
const { broadcast } = require("../../../config/webSocket/webSockerConnect");

const createCustomer = async (customer) => {
  const newCustomer = await customerCreateRepository(customer);
  broadcast({ type: "NEW_CUSTOMER", data: newCustomer });
  return newCustomer;
};

const listCustomers = async () => {
  return await customerListRepository();
};

module.exports = {
  createCustomer,
  listCustomers,
};
