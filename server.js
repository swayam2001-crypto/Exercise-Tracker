const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
// get driver connection

const exercisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users', usersRouter);
 
const db = mongoose.connect("mongodb+srv://s1012001:s1012001@cluster0.fcp20cv.mongodb.net/?retryWrites=true&w=majority")
.then((result) => {
  app.listen(port, () =>  console.log(`Server is running on port: ${port}`))
})
.catch( (err) => console.log(err));