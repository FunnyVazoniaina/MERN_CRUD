const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.route");
require("dotenv").config();

// Initialize express app

const app = express();
app.use(express.json());
// Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port : " + process.env.PORT);
});
// Define routes
app.use("/api/products", productRoutes);
