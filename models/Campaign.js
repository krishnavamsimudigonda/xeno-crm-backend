const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rule: { type: Object, required: true }, // e.g., { totalSpend: { $gt: 5000 } }
  createdAt: { type: Date, default: Date.now },
  audienceSize: { type: Number },
  message: { type: String, required: true }
});

module.exports = mongoose.model("Campaign", campaignSchema);
