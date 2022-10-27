const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const methodOverride = require('method-override')
const homeData = require('./models/seed.js')
const HomeProduct = require('./models/product.js')

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
//   app.use(methodOverride("_method"))
//app.use('',)
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Welcome to my shop!')
// })

app.get("/seed", (req, res) => {
    HomeProduct.deleteMany({}, (error, allProducts) => { })
    HomeProduct.create(homeData, (error, data) => {
        res.redirect("/intravenous");
    });
})


// INDEX
app.get('/intravenous', (req, res) => {
    // res.send('mic check 1,2,1,2')
    HomeProduct.find({}, (error, allProducts) => {
        res.render('index.ejs', { homeproducts: allProducts })
    })
})

// NEW
app.get('/intravenous/new', (req, res) => {
    // res.send('create new product')
    res.render('new.ejs')
})

// DELETE / DESTROY
// app.delete('/intravenous/:id', (req,res) => {
//     // res.send('delete product here')
//     homeProducts.findByIdAndRemove(req.params.id, (err, deletedHomeProduct) => {
//         res.redirect('/intravenous')
//     })
// })

// UPDATE
// CREATE
// app.post('/intravenous', (req, res) => {
//     let newHome = {
//         name: req.body.name,
//         description: req.body.description,
//         img: req.body.img,
//         price: req.body.price,
//         qty: req.body.qty
//     }
//     homeData.push(newHome)
//     res.redirect('/intravenous')
// })


// EDIT
app.get('/intravenous/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        allProducts: homeData[req.params.id],
        id: req.params.id
    })
})

// SHOW
app.get('/intravenous/:id', (req, res) => {
    HomeProduct.findById(req.params.id, (err, product) => {
        res.render('show.ejs', {
            product: product
        })
    })

})



// LISTENER
app.listen(PORT, () => console.log(`you are now listening to the smooth sound of port ${PORT}...`))