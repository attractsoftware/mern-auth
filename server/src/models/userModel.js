const mongoose = require("mongoose");

const UserSchma = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: "active" },
  },
  {
    collation: {
      locale: "en_US",
      strength: 1,
    },
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchma);
