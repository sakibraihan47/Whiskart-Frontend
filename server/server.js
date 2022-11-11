const express = require("express");
const mongoose = require("mongoose");
const AuthRouter = require("./routes/auth.routes.js");
const ArtworkRouter = require("./routes/artworkpost.routes.js");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const mongoString = process.env.MONGODB_URI;
mongoose.connect(mongoString);

app.use(express.json());
app.use(cors());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(AuthRouter);
app.use(ArtworkRouter);
app.listen(3002, () => {
  console.log("Server is running at port 3002");
});
