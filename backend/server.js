const express = require('express');
const dotenv = require('dotenv').config();
const port = 8080;

const app = express();

app.use('/api/videos', require('./routes/videoRoutes'));



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));