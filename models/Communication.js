const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  status: { type: String, enum: ["SENT", "FAILED"], default: "SENT" },
  sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Communication", communicationSchema);
