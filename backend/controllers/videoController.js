const asyncHandler = require("express-async-handler");
const { findByIdAndUpdate } = require("../models/videoModel");

const Video = require("../models/videoModel");

// @desc    Get videos
// @route   GET /api/videos
// @access  Private
const getVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find();

  res.status(200).json(videos);
});

// @desc    Set video
// @route   POST /api/videos
// @access  Private
const setVideo = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a valid video");
  }

  const video = await Video.create({
    name: req.body.name,
    description: req.body.description,
    videoAddress: req.body.videoAddress,
  });

  res.status(200).json(video);
});

// @desc    Update video
// @route   PUT /api/videos/:id
// @access  Private
const updateVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);

  if (!video) {
    res.status(400);
    throw new Error("Video not found");
  }

  const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedVideo);
});

// @desc    Delete video
// @route   DELETE /api/video
// @access  Private
const deleteVideo = asyncHandler(async (req, res) => {

    const video = await Video.findById(req.params.id);

    if (!video) {
      res.status(400);
      throw new Error("Video not found");
    }

    await Video.remove()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getVideos,
  setVideo,
  updateVideo,
  deleteVideo,
};
