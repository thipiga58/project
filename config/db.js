const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/login_registerDB');

connection.on('connected', () => {
    console.log('DB Connected');
});

module.exports = connection;