const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Load All Routes
const customerRoutes = require("./routes/customer");
const orderRoutes = require("./routes/order");
const campaignRoutes = require("./routes/campaign");
const aiRoutes = require("./routes/ai"); // ✅ Add this line

// ✅ Use Routes
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/ai", aiRoutes); // ✅ Register AI route

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
