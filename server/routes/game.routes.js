const GameController = require('../controllers/game.controller')

module.exports = (app) => {
    app.get('/api/allGames', GameController.findAllGames)
}