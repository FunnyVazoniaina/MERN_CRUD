// Connect to MongoDB
const mongoose = require("mongoose");

const connectDB = () => {
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
};

module.exports = connectDB;
