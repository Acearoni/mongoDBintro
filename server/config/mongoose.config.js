const mongoose = require("mongoose");


//will create a new DB with the given name if it does not exist already.
mongoose.connect('mongodb://127.0.0.1:27017/gamesDB', {
    
})
    .then(() => console.log('Established a connection to the database'))
    .catch(() => console.log('Something went wrong when connecting to the database ', err));