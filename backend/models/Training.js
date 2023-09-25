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
      userId: {
        type: String,
        required: true,
      },
      day: {
        type: String,
        required: true,
      },
      shift: {
        type: Number,
        required: true,
      },
      exercises: {
        type: String,
        required: true,
      },
      observations: {
        type: String,
        required: false,
      },
      cout: {
        type: String,
        required: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = Training;
