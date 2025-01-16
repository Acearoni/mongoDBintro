const mongoose = require('mongoose'); //importing Mongoose Library


//This is a blueprint of how our data should look.
const GameSchema = mongoose.Schema({ //mongoose.Schema() is a function, then add the {} into it, passing in an object.
    gameName: {
        type: String,
        required: [true, "Game Name is required."],
        minLength: [3, "Game Name must be 3 characters long."],
        maxLength: [30, "Game Name is too long."]
    },
    dev: {
        type: String,
        required: [true, "Developer Name is required."],
        minLength: [3, "Developer Name must be 3 characters long."]
    },
    releaseYear:{
        type: Number,
        required: [true, "A Release Year is required."],
        min:[1960, "Release Year must be at least 1960 or later."],
        max:[2025, "Release Year cannot be past 2025."]
    },
    genre: {
        type: String,
        required: [true, "A Genre is required."],
        minLength: [3, "Genre must be 3 characters long."]
    }

    //makes createdAt and updatedAt work for us behind the scenes
} , {timestamps: true} )  


//exporting the game MODEL to use within the other files. Takes in the 'Name' and the Schema
module.exports = mongoose.model('Game', GameSchema)



