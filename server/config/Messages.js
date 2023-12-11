const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({

    conversetionId: {
        type: String
    },
    receiverId: {
        type: String
    },
    senderId: {
        type: String
    },
    type: {

        type: String
    },

    value: {
        type: String
    }

}, {
    timestamps: true,
});

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;
