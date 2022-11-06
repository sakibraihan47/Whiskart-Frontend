const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      function (err, decode) {
        if (err) req.userModel = undefined;

        userModel
          .findOne({
            _id: decode.id,
            role: decode.role,
          })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({
                message: err,
              });
            } else {
              req.userModel = user;
              next();
            }
          });
      }
    );
  } else {
    req.userModel = undefined;
    next();
  }
};
module.exports = verifyToken;
