const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const Training = mongoose.model(
  "Training",
  new Schema(
    {
      training: {
        type: String,
        required: true,
      },
      day: {
        type: String,
        required: true,
      },
      shift: {
        type: String,
        required: true,
      },
      observation: {
        type: string,
        required: false,
      },
      cout: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = Training;
