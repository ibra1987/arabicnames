const { Schema, model, models } = require("mongoose");
const { stringify } = require("postcss");

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  subscribed: {
    type: Boolean,
    default: false,
  },
  body: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  postId: {
    type: String,
    required: true,
  },
});

module.exports = models?.comment || model("comment", commentSchema);
