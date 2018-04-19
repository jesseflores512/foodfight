const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerPort = new Schema ({
  name: {
    type: String,
    trim: true,
    required: 'Name is Required'
  },

  address: {
    type: String,
    trim: true,
    required: 'Address is Required'
  },

  city: {
    type: String,
    trim: true,
    required: 'City is Required'
  },

  state: {
    type: String,
    trim: true,
    required: 'State is Required'
  },

  zipcode: {
    type: Number,
    trim: true
  },

  picture: {
    type: String,
    trim: true
  },

  likes: {
    type: Number
  }
},{ collection: 'bbqrankings'

});

module.exports = mongoose.model('ServerPort', ServerPort);
