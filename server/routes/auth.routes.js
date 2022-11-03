const express = require("express");
const { signup } = require("../controllers/auth.controller");
const userModel = require("../models/user.model");
const app = express();
router = express.Router();

(router = express.Router()),
  router.post("/signup", signup, function (req, res) {});

module.exports = router;
