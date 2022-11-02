const express = require('express');
const dotenv = require('dotenv').config();
const port = 8080;

const app = express();

app.get('/api/videos', (req, res) => {
    res.status(200).json({ message: 'Get Videos' })
})



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));