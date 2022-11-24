const mongoose = require("mongoose");

const userCartSchema = new mongoose.Schema(
  {
    artwork: { type: mongoose.Schema.Types.ObjectId, ref: "Artworks" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", userCartSchema);
module.exports = Cart;
