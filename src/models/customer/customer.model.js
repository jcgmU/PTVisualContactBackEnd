const { Schema, model } = require("mongoose");

const CustomerSchema = new Schema(
  {
    name: { type: String, required: true },
    waitTime: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CustomerModel = model("Customer", CustomerSchema);

module.exports = CustomerModel;
/*
curl -X POST http://localhost:3000/api/customer \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "waitTime": 15
}'
*/
