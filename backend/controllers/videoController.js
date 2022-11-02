// @desc    Get videos
// @route   GET /api/videos
// @access  Private
const getVideos = (req, res) => {
  res.status(200).json({ message: "Get Videos" });
};

// @desc    Set video
// @route   POST /api/videos
// @access  Private
const setVideo = (req, res) => {
  res.status(200).json({ message: "Set video" });
};

// @desc    Update video
// @route   PUT /api/videos/:id
// @access  Private
const updateVideo = (req, res) => {
  res.status(200).json({ message: `Update video ${req.params.id}` });
};

// @desc    Delete video
// @route   DELETE /api/video
// @access  Private
const deleteVideo = (req, res) => {
  res.status(200).json({ message: `Delete video ${req.params.id}` });
};

module.exports = {
  getVideos,
  setVideo,
  updateVideo,
  deleteVideo,
};
