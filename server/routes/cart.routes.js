const express = require("express");
const router = express.Router();
const { addCart } = require("../controllers/cart.controller.js");
const auth = require("../middleware/auth");

router.post("/mycart", auth, addCart);
module.exports = router;
