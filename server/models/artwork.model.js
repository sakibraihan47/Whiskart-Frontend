const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    qty: { type: Number, required: true },
    like: {type: Number, required:0},
    des: { type: String, required: true },
    canvas: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Artwork = mongoose.model("Artworks", artworkSchema);
module.exports = Artwork;
