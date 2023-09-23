const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const Diet = mongoose.model(
  "Diet",
  new Schema(
    {
      diet: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      }
    },
    { timestamps: true }
  )
);

module.exports = Diet;