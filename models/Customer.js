const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  totalSpend: { type: Number, required: true },
  lastOrderDate: { type: Date, required: true }
});

module.exports = mongoose.model("Customer", customerSchema);
