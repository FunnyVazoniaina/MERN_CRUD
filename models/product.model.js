const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    name: {
        type: String,
    required: [true, "please enter product name"] 
    },
     Quantity: {
        type: Number,
        required: true,
        default: 0
     },
    price: {
        type: Number,
        required: true,
        default: 0
     },
    image: {
        type: String,
        required: false 
     },
         
    },
     {
            timestamps: true
     }
  
);