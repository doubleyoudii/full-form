const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

//Middlewares`````````````````````````````````````````
app.use(cors());
app.use(express.json());

//Database connection``````````````````````````````````````````````````
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connection establish succesfully');
});

//Router``````````````````````````````````````````````````````
const formRouter = require('./routes/form.route');
app.use('/form', formRouter);





app.listen(port, () => {
  console.log('Server running in port ' + port);
});