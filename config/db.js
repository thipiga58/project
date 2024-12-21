const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb+srv://user1:abc123d4@cluster0.rev29.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

connection.on('connected', () => {
    console.log('DB Connected');
});

module.exports = connection;
