const artworkModel = require("../models/artwork.model");

const dotenv = require("dotenv");
const { json } = require("express");

dotenv.config();
//post artwork
exports.postArtwork = async (req, res) => {
  console.log("user", req.user);
  const artwork = new artworkModel({
    name: req.body.name,
    artist: req.user.user_id,
    des: req.body.des,
    canvas: req.body.canvas,
    genre: req.body.genre,
    color: req.body.color,
    qty: req.body.qty,
    price: req.body.price,
    img: req.body.img,
  });
  artwork.save((err, artwork) => {
    if (err) {
      res.status(500).send({
        message: "all art details required",
      });
      console.log(err);
      return;
    } else {
      res.status(200).json({
        artwork,
      });
    }
  });
};
//get all artwork
exports.getArtwork = async (req, res) => {
  let artworks = await artworkModel.find();
  console.log("artworks", artworks);
  res.status(200).json({ artworks });
};
//delete artwork
exports.deleteArtwork = async (req, res) => {
  let removedArtwork = await artworkModel.remove({ _id: req.params._id });
  console.log("deleted", removedArtwork);
  res.status(200).json({ removedArtwork });
};
//update info artwork
exports.updateArtwork = async (req, res) => {
  let updatedArtwork = await artworkModel.updateOne({ _id: req.params._id });
  console.log("updated", updatedArtwork);
  res.status(200).json({ updatedArtwork });
};
