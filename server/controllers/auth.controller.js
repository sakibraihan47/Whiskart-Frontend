const userModel = require("../models/user.model");

exports.signup = async (req, res) => {
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isArtist: req.body.isArtist,
    isBuyer: req.body.isBuyer,
    pass: req.body.pass,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    } else {
      res.status(200).send({
        message: "User Registered successfully",
      });
    }
  });
};
{
  /*bcrypt.hashSync(req.body.password, 8)*/
}
