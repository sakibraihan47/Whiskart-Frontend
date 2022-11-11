const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    pass: { type: String, required: true },
    role: {
      type: String,
      enum: ["buyer", "artist"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
