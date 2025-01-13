//within the controller, working with the MODEL directlly;
//import the model. 

//name Game = MODEL
const Game = require('../models/game.model')

module.exports = {
    //find ALL or R in CRUD (Read All)
    findAllGames: (req, res) => {
        Game.find() //method to find all of something
            .then((allGames) => {
                res.status(200).json(allGames)
            })
            .catch((err) => {
                console.log("something SUPER test wrong ETC.")
                res.status(500).json(err)
            })
    }
}
