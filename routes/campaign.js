const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");
const Campaign = require("../models/Campaign");
const Communication = require("../models/Communication");

// POST /api/campaigns
router.post("/", async (req, res) => {
  try {
    const { name, rule, message } = req.body;

    // 1. Get target customers
    const audience = await Customer.find(rule);

    // 2. Save campaign
    const campaign = new Campaign({
      name,
      rule,
      message,
      audienceSize: audience.length
    });
    const savedCampaign = await campaign.save();

    // 3. Simulate delivery
    const communications = audience.map((cust) => ({
      customerId: cust._id,
      campaignId: savedCampaign._id,
      status: Math.random() < 0.9 ? "SENT" : "FAILED"
    }));
    await Communication.insertMany(communications);

    res.status(201).json({
      campaign: savedCampaign,
      sent: communications.filter(c => c.status === "SENT").length,
      failed: communications.filter(c => c.status === "FAILED").length
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/campaigns
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
