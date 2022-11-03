const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    videoAddress: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Video', videoSchema);
