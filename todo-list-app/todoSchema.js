const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

//creating a model using a collection from my database called blog.

const TODOList = mongoose.model("Blog", todoListSchema);
module.exports = TODOList;
