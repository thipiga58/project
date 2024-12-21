const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb+srv://thipiga57:<db_password>@cluster0.rev29.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

connection.on('connected', () => {
    console.log('DB Connected');
});

module.exports = connection;
