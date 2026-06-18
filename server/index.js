require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/products", productRoutes);

app.use("/api/banner", bannerRoutes);

app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});