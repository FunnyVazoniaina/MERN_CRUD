const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
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
