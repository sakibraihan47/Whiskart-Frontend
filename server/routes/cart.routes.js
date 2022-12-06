const express = require("express");
const router = express.Router();
const { addCart } = require("../controllers/cart.controller.js");
const { getCart } = require("../controllers/cart.controller.js");
const { deleteItemCart } = require("../controllers/cart.controller.js");
const { getCartItem } = require("../controllers/cart.controller.js");
const auth = require("../middleware/auth");

router.post("/mycart", auth, addCart);
module.exports = router;

router.get("/getmycart/:userId", auth, getCart);
module.exports = router;

router.delete("/deletefromcart/:artId", auth, deleteItemCart);
module.exports = router;

router.get("/getthisitem/:artId", auth, getCartItem);
module.exports = router;
