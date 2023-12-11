const mongoose = require('mongoose');

const ConnectionSchema = mongoose.Schema({
  members: {
    type: Array,
  },
  messages: {
    type: String,
  }
}, {
  timestamps: true,
});

const Connection = mongoose.model('Connection', ConnectionSchema);
module.exports = Connection;
