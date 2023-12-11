const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/User';

exports.DbConnect = async () => {
    try {
        await mongoose.connect(url);
        console.log("DB Connected Successfully");
    } catch (err) {
        console.error(err.message);
    }
};
