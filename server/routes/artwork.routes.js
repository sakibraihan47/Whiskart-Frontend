const express = require("express");
const router = express.Router();
const { postArtwork } = require("../controllers/artwork.controller");
const { getArtwork } = require("../controllers/artwork.controller");
const { deleteArtwork } = require("../controllers/artwork.controller");
const { updateArtwork } = require("../controllers/artwork.controller");
const auth = require("../middleware/auth");

//post artworks
router.post("/postartwork", auth, postArtwork);

//get artworks
router.get("/getartwork", auth, getArtwork);
module.exports = router;

//del artwork
router.get("/delartwork", auth, deleteArtwork);
module.exports = router;

//update artworks
router.get("/updateartwork", auth, updateArtwork);
module.exports = router;
