const express = require("express");
const router = express.Router();
const {
  getRecommended,
} = require("../controllers/recommendation.controller.js");

const auth = require("../middleware/auth");

router.post("/recommendation", auth, getRecommended);
module.exports = router;
