const express = require("express");
const router = express.Router();
const { getArtist } = require("../controllers/artist.controller.js");
const auth = require("../middleware/auth");

router.get("/getartist", auth, getArtist);
module.exports = router;
