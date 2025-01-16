const express = require('express')
const app = express()
const cors = require('cors') //Cross Origin Resource Sharing

app.use(cors()) //can do app.us(cors({origin:'http://127.0.0.1:5173'})) or whatever my local IP is.
app.use(express.json(), express.urlencoded({ extended: true}))


require('./config/mongoose.config') //connecting to our DB

require('./routes/game.routes')(app) //Configuring our Routes





app.listen(8000, () => console.log("The Server is Running on Port 8000"))