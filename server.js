const express = require("express");
const mongoose = require("mongoose");
const productModel = require("./models/product.model");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// testing route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// saving products
app.post("/api/product", async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const product = new productModel({
      name,
      quantity,
      price,
      image,
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Updating a product by ID
app.put("/api/product/:id", async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      { name, quantity, price, image },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetching all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetching a single product by ID
app.get("/api/product/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Deleting a product by ID
app.delete("/api/product/:id", async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://funnyvazoniaina:HxDd4nwnDVhjWFFf@crud.vfgfj2i.mongodb.net/?retryWrites=true&w=majority&appName=CRUD",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
