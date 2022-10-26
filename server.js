const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const methodOverride = require('method-override')
const homeData = require('./models/seed.js')
const homeProducts = require('./models/product.js')

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

  app.use(express.urlencoded({extended: true}))
//   app.use(methodOverride("_method"))
  //app.use('',)
  app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Welcome to my shop!')
// })

// INDEX
app.get('/', (req,res) => {
    // res.send('mic check 1,2,1,2')
    res.render('index.ejs', {
    allProducts: homeData,
    title: 'index'
    })
})


// NEW
app.get('/intravenous/new', (req, res) => {
    res.send('create new product')
    // res.render('new.ejs')
})

// DELETE / DESTROY
app.delete('/intravenous/:id', (req,res) => {
    res.send('delete product here')
})

// UPDATE
// CREATE
// EDIT
// SHOW

// app.get("/seed", (req, res) => {
//     homeProducts.deleteMany({}, (error, allProducts) => {})
//     homeProducts.create()
// })

// LISTENER
app.listen(PORT, () => console.log(`you are now listening to the smooth sound of port ${PORT}...`))