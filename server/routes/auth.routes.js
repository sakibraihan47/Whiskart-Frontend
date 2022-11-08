const express = require("express");
const { postArtwork } = require("../controllers/artwork.controller");
const { signup } = require("../controllers/auth.controller");
const { signin } = require("../controllers/auth.controller");
const { hiddenContent } = require("../controllers/auth.controller");
const auth = require("../middleware/auth");
const router = express.Router();

//signup

router.post("/signup", signup);

//signin

router.post("/signin", signin);

//artwork post

router.post("/postartwork", postArtwork);

//token verification

router.get("/hiddencontent", auth, hiddenContent);

module.exports = router;
