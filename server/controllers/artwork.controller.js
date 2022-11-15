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

//get all artworks
exports.getArtwork = async (req, res) => {
  let artworks = await artworkModel.find({ artist: req.params.userId });
  console.log("artworks", artworks);
  res.status(200).json({ artworks });
};
//get one artwork
exports.getThisArtwork = async (req, res) => {
  let artworks = await artworkModel.findOne({ _id: req.params.artId });
  console.log("Current artwork", artworks);
  res.status(200).json({ artworks });
};
//delete artwork
exports.deleteArtwork = async (req, res) => {
  let removedArtwork = await artworkModel.deleteOne({ _id: req.params.artId });
  console.log("deleted", removedArtwork);
  res.status(200).json({ removedArtwork });
};
//update info artwork
exports.updateArtwork = async (req, res) => {
  let updatedArtwork = await artworkModel.updateOne(
    { _id: req.params.artId },
    {
      $set: req.body,
    },
    { new: true }
  );
  console.log("updated", updatedArtwork);
  res.status(200).json({ updatedArtwork });
};
