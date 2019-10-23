const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNum: {
    type: Number,
    required: true
  },
  cardId: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  aboutMe: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;