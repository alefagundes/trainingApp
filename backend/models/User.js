const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const User = mongoose.model(
  "User",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      birthDate: {
        type: Date,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      training: Object,
      cout: {
        type: Array,
        required: false,
      },
      image: {
        type: String,
        require: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = User;
