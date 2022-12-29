const Cart = require("../models/cart.model");

const dotenv = require("dotenv");

dotenv.config();

//add to cart
exports.addCart = async (req, res) => {
  const thisCart = new Cart({
    artwork: req.body.artwork,
    user: req.body.buyer,
  });

  thisCart.save((err, thisCart) => {
    if (err) {
      res.status(500).send({
        message: "Cart Empty",
      });
      console.log(err);
      return;
    } else {
      res.status(200).json({
        thisCart,
      });
    }
  });
};

//get cart
exports.getCart = async (req, res) => {
  let cart = await Cart.find({ user: req.params.userId }).populate({
    path: "artwork",
    select: "_id name price canvas artist img",
    populate: { path: "artist", select: "_id firstName lastName" },
  });
  console.log("artworks", cart);
  res.status(200).json({ cart });
};

//delete cart
exports.deleteItemCart = async (req, res) => {
  let removedItem = await Cart.deleteOne({ _id: req.params.artId });
  console.log("deleted", removedItem);
  res.status(200).json({ removedItem });
};

//get items from cart
exports.getCartItem = async (req, res) => {
  let cart = await Cart.findOne({ artwork: req.params.artId });
  if (cart == null) {
    res.status(200).json(false);
  } else {
    res.status(200).json(true);
  }
};

exports.checkCart = async (req, res) => {
  console.log("🚀 ~ file: cart.controller.js:63 ~ exports.checkCart= ~ req.body.artwork", req.body.artwork)
  console.log("🚀 ~ file: cart.controller.js:64 ~ exports.checkCart= ~ req.body.buyer,", req.body.buyer)

  let cart = await Cart.findOne({
    artwork: req.body.artwork._id,
    user: req.body.buyer,
  });
    
    
  if (cart == null) {  res.status(200).json(false);
   } else {
    res.status(200).json(true);
 }

  console.log("cart",cart)
};
