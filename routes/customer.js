const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// POST: Add a customer
router.post("/", async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    const saved = await newCustomer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Get all customers (for later)
router.get("/", async (req, res) => {
  try {
    const data = await Customer.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
