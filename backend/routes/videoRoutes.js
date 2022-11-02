const express = require("express");
const router = express.Router();
const {
  getVideos,
  setVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

router.get("/", getVideos);

router.post("/", setVideo);

router.put("/:id", updateVideo);

router.delete("/:id", deleteVideo);

module.exports = router;
