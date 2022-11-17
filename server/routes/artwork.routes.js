const express = require("express");
const router = express.Router();
const { postArtwork } = require("../controllers/artwork.controller");
const { getArtwork } = require("../controllers/artwork.controller");
const { getThisArtwork } = require("../controllers/artwork.controller");
const { deleteArtwork } = require("../controllers/artwork.controller");
const { updateArtwork } = require("../controllers/artwork.controller");
const auth = require("../middleware/auth");

//display artworks homepage
router.get("/getartwork/", auth, getArtwork);
module.exports = router;

//post artworks
router.post("/postartwork", auth, postArtwork);

//get artworks
router.get("/getartwork/:userId", auth, getArtwork);
module.exports = router;

//del specific artwork
router.delete("/delartwork/:artId", auth, deleteArtwork);
module.exports = router;

//update specific artwork
router.put("/updateartwork/:artId", auth, updateArtwork);
module.exports = router;

//get specific artwork
router.get("/getthisartwork/:artId", auth, getThisArtwork);
module.exports = router;
