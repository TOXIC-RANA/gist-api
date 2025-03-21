require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const gistRoutes = require("./routes/gistRoutes");

const app = express();
connectDB(); // MongoDB কানেক্ট করা

app.use(cors());
app.use(express.json());

app.use("/api", gistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
