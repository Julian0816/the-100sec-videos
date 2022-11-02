const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware'); //Bring in the error handler middleware
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/videos', require('./routes/videoRoutes'));

app.use(errorHandler); //Using the error handler, this will override the defult express error handler to manage the stack



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));