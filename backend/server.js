//Dev branch
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware'); //Bring in the error handler middleware
const connectDB = require('./config/db');
const port = process.env.PORT || 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/workouts', require('./routes/workoutRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler); //Using the error handler, this will override the defult express error handler to manage the stack



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));