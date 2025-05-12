const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Together AI key from .env
const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

router.post("/suggest", async (req, res) => {
  const { intent } = req.body;

  if (!intent) {
    return res.status(400).json({ error: "Intent is required" });
  }

  try {
    const response = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "user",
            content: `Generate 3 short, friendly promotional messages for this campaign: "${intent}"`,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response.data.choices[0].message.content;
    const suggestions = content.split(/\n+/).filter(Boolean);
    res.json({ suggestions });

  } catch (err) {
    console.error("Together AI error:", err.response?.data || err.message);
    res.status(500).json({ error: "AI generation failed" });
  }
});

module.exports = router;
