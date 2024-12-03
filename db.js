const mongoose = require('mongoose');

//Define mongoDB database connection URL

// const mongoURL = 'mongodb://127.0.0.1:27017/myDatabase'  // replace myDatabase name with your database name
const mongoURL = 'mongodb+srv://harshitkapadia563:harshit0506@hotel.ll4m6.mongodb.net/hotel?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,     // default passing otherwise you get some error messages at mongodb server
    serverSelectionTimeoutMS: 30000,
})

//Get the default connection
// Mongoose maintain default connection object representing the MongoDB Connection 
const db = mongoose.connection;

// define event listeners for database connection 

db.on('connected', () => {
    console.log("connection established");
});

db.on('error', (err) => {
    console.log("mongodb connection error", err);
});

db.on('disconnected', () => {
    console.log("mongodb disconnect");
});

//Export database connection

module.exports = db;
