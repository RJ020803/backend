import express from "express";
import connectdb from "./config/db.js";
import "dotenv/config";
import User from "./models/user.model.js";
const app = express();
connectdb();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Mandhak bohot ganda hai and hamasa datat rhta hai ");
});
app.post("/users", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(202).json({
      success: true,
      data: newUser,
    });
  } catch (error) {}
});
app.listen(5000, () => {
  console.log("server is running");
});
