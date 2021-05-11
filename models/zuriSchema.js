const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for the task given
const zuriSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  data: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

const Zuri = mongoose.model("Zuri", zuriSchema);
module.exports = Zuri;
