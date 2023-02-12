require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //Database connection
    mongoose.connect("mongodb+srv://bansalakash160:vo6mA9OPyVwrRTPz@cluster0.5p59uek.mongodb.net/bansalakash160?retryWrites=true&w=majority"
        , {
            //userNewUrlParser: true,
            //useCreateIndex: true ,
            //useUnifiedTopplogy: true,
            //useFindAndModify: true
        });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected.');
    }).on('error', function (err) {
        console.log(err);
    });
}



module.exports = connectDB;