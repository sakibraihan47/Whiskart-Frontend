const express = require("express");
const { signup } = require("../controllers/auth.controller");
const { signin } = require("../controllers/auth.controller");
const userModel = require("../models/user.model");
const app = express();
router = express.Router();

//signup
(router = express.Router()),
  router.post("/signup", signup, function (req, res) {});

//signin

router.post("/signin", signin, function (req, res) {});

module.exports = router;
