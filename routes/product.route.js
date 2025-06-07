const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Create a new product
router.post("/", productController.createProduct);
// Update a product by ID
router.put("/:id", productController.updateProduct);
// Fetch all products
router.get("/", productController.getAllProducts);
// Fetch a single product by ID
router.get("/:id", productController.getProductById);
// Delete a product by ID
router.delete("/:id", productController.deleteProduct);
module.exports = router;
