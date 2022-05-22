import axios from "axios";
import connection from "../../../../database/DBConnect";
import Comment from "../../../../models/Comment";
import isEmail from "../../../../utils/helpers/isEmail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.redirect(307, "/blog");
  }
  const { name, email, body, subscribed, postId } = req.body;
  if (!name || !email || !body || !postId)
    res.status(400).json({
      error: "Please fill in all fields",
    });

  await connection();
  await new Comment({
    name,
    postId,
    email,
    body,
    subscribed,
  }).save();

  const comments = await Comment.find();

  res.status(201).json(comments);
}
