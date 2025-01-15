const GameController = require('../controllers/game.controller')

module.exports = (app) => {
    app.get('/api/allGames', GameController.findAllGames)
    app.post('/api/createGame', GameController.createGame)
    app.get('/api/findOneGame/:id', GameController.findOneGame)
    app.put('/api/updateGame/:id', GameController.updateGame)
    app.delete('/api/deleteGame/:id', GameController.deleteGame)
    
}