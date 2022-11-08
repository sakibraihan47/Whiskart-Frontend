const artworkModel = require("../models/artwork.model");
const dotenv = require("dotenv");
dotenv.config();

exports.postArtwork = async (req, res) => {
  const artwork = new artworkModel({
    name: req.body.name,
    artist: req.body.artist,
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
