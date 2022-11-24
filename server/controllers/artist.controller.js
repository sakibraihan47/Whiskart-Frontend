const userModel = require("../models/user.model");

const dotenv = require("dotenv");

dotenv.config();

exports.getArtist = async (req, res) => {
  let artists = await userModel.find({ role: "artist" });

  res.status(200).json({ artists });
};
