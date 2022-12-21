const express = require("express");
const { signup, checkuser, reset } = require("../controllers/auth.controller");
const { signin } = require("../controllers/auth.controller");
const { hiddenContent } = require("../controllers/auth.controller");
const auth = require("../middleware/auth");
const router = express.Router();
//signup

// router.use(requireAuth);
router.post("/signup", signup);
//signin
router.post("/signin", signin);

router.post("/check", checkuser);

router.put("/resetpassword", reset);

//token verification

router.get("/hiddencontent", auth, hiddenContent);

module.exports = router;
