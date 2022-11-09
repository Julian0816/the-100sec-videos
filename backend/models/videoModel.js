const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }
  },
  {
    // name: String,
    // description: String,
    // videoAddress: String,
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    videoAddress: {
      type: String,
      required: [true, 'Please add a video'],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Video', videoSchema);
