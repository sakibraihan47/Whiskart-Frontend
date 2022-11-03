import connectDb from "../../server/middleware/connection.js";
import User from "../../server/models.js";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let _user = new User(req.body);
    _user.save();
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "Fail" });
  }
};
export default connectDb(handler);
