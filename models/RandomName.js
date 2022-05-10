const { Schema, model, models } = require("mongoose");

const randomNameSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },

  Meaning: {
    type: String,
    required: true,
  },
});

module.exports = models?.randomname || model("randomname", randomNameSchema);
