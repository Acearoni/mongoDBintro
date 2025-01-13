const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true}))


require('./config/mongoose.config')

require('./routes/game.routes')(app)





app.listen(8000, () => console.log("The Server is Running on Port 8000a"))