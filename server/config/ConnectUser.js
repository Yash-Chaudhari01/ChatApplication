const mongoose = require('mongoose');

const ConnectUserSchema = mongoose.Schema({
  members: {
    type: Array,
  },
  messages: {
    type: String,
  }
}, {
  timestamps: true,
});

const ConnectUser = mongoose.model('Connection', ConnectUserSchema);
module.exports = ConnectUser;
