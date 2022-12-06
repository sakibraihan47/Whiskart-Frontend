const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//sign-up controller
exports.signup = async (req, res) => {
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role,
    pass: bcrypt.hashSync(req.body.pass, 8),
  });

  //token code
  const token = jwt.sign(
    {
      user_id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.API_SECRET,
    {
      expiresIn: "4h",
    }
  );
  // save user token
  user.token = token;

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: "all input required",
      });
      console.log(err);
      return;
    } else {
      res.status(200).json({
        token,
        user,
      });
    }
  });
};

//sign-in controller
exports.signin = async (req, res) => {
  try {
    // Get user input

    const { email, pass } = req.body;
    const user = await userModel.findOne({ email });

    // Validate user input
    if (!(email && pass)) {
      res.status(400).send("user not found");
    }

    // Validate if user exist in our database

    if (user && (await bcrypt.compare(pass, user.pass))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email, role: user.role },
        process.env.API_SECRET,
        {
          expiresIn: 2000,
        }
      );

      // save user token
      user.token = token;

      // user success msg
      res.status(200).json({
        User: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
        },
        message: "Login Success!",
        accessToken: token,
      });
    }
    // user fail msg
    else res.status(400).json({ error: "invalid Credentials" });
  } catch (err) {
    console.log(err);
  }
};

//token controller

exports.hiddenContent = async (req, res) => {
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
};
