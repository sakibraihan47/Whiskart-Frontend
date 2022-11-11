const express = require("express");
const router = express.Router();
const { postArtwork } = require("../controllers/artwork.controller");
const auth = require("../middleware/auth");
router.post("/postartwork", auth, postArtwork);

module.exports = router;
