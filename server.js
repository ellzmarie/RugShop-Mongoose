const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const rugsController = require(',/controllers/rugs')

require('dotenv').config()
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use('/intravenous', rugsController)
app.use(express.static('public'))

// LISTENER
app.listen(PORT, () => console.log(`you are now listening to the smooth sound of port ${PORT}...`))