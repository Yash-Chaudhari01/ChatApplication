const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({

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

    Message: {
        type: String
    }

}, {
    timestamps: true,
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
