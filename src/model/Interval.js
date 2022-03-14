const mongoose = require("mongoose");

const PauseModel = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
  },
  date: {
    type: String,
  },
  agent: {
    type: String,
  },
  reason: {
    type: String,
  },
  offline: {
    type: String,
  },
  online: {
    type: String,
  },
});

module.exports = mongoose.model("Pauses", PauseModel);