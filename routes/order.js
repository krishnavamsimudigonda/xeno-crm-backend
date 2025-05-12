const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const { customerId, total, orderDate } = req.body;
    const order = new Order({ customerId, total, orderDate });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("customerId", "name email");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
