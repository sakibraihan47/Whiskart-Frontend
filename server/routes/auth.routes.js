const express = require("express");
const { signup } = require("../controllers/auth.controller");
const { signin } = require("../controllers/auth.controller");
const auth = require("../middleware/auth");
const verifyToken = require("../middleware/authJWT");
const User = require("../models/user.model");
const router = express.Router();

//signup

router.post("/signup", signup, function (req, res) {});

//signin

router.post("/signin", signin, function (req, res) {});

//token verification

router.get("/hiddencontent", auth, function (req, res) {
  if (!req.user) {
    res.status(403).send({
      message: "Token Invalid",
    });
  }
  console.log(req.user);
  if (req.user.role == "artist") {
    res.status(200).send({
      message: "Success! Buyer",
    });
  } else {
    res.status(403).send({
      message: "Unauthorized access",
    });
  }
});

module.exports = router;
