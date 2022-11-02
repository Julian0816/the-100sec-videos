const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: "Get Videos" });
})

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set video" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update video ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete video ${req.params.id}` });
});

module.exports = router;