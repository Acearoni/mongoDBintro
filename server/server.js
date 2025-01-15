const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true}))


require('./config/mongoose.config') //connecting to our DB

require('./routes/game.routes')(app) //Configuring our Routes





app.listen(8000, () => console.log("The Server is Running on Port 8000"))