const mongoose = require('mongoose'); //importing Mongoose Library

const GameSchema = mongoose.Schema({ //mongoose.Schema() is a function, then add the {} into it, passing in an object.
    gameName: String,
    title: String,
    releaseYear: Number,
    genre: String

    //makes createdAt and updatedAt work for us behind the scenes
} , {timestamps: true} )  


//exporting the game MODEL to use within the other files. Takes in the 'Name' and the Schema
module.exports = mongoose.model('Game', GameSchema)



