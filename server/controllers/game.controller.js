//within the controller, working with the MODEL directlly;
//import the model. 

//name Game = MODEL
const Game = require('../models/game.model')

module.exports = {
    //find ALL or R in CRUD (Read All)
    findAllGames: (req, res) => {
        Game.find() //method to find all of something
            //name of our choice
            .then((allGames) => {
                //stauts 200 related to successful GET
                res.status(200).json(allGames)
            })
            .catch((err) => {
                console.log("something SUPER test wrong ETC.")
                res.status(500).json(err)
            })
    },
    //Create, C in CRUD
    createGame: (req, res) => {
        Game.create(req.body) //all form data goes in request body
            //name of our choice
            .then((newGame) => {
                //201 is succesful post request
                res.status(201).json(newGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Read One
    findOneGame: (req, res) => {
        console.log(req.params);
        Game.findOne({ _id: req.params.id })
            .then((oneGame) => {
                res.status(200).json(oneGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Update Game
    updateGame: (req, res) => {
        Game.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedGame) => {
                res.json(updatedGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Delete Game
    deleteGame: (req,res) => {
        Game.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}
