const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  if (!req.header("Authorization")) {
    return res.status(401).json({ err: "no token Authorization failed" });
  }
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ err: "no token Authorization failed" });
  }
  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).json({ err: "no token Authorization failed" });
  }
};
