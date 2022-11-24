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
