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
    { user_id: user._id, email: user.email, role: user.role },
    process.env.API_SECRET,
    {
      expiresIn: "2h",
    }
  );
  // save user token
  user.token = token;

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: "all input required",
      });
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

    // Validate user input
    if (!(email && pass)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const user = await userModel.findOne({ email });

    if (user && (await bcrypt.compare(pass, user.pass))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email, role: user.role },
        process.env.API_SECRET,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user success msg
      res.status(200).send({
        User: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        message: "Login Success!",
        accessToken: token,
      });
    }
    // user fail msg
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
