const express = require('express')
const rugRouter = express.Router()
const homeData = require('../models/seed.js')
const HomeProduct = require('../models/product.js')

// I N D U C E S - Index New Delete Update Create Edit Show
// SEED
rugRouter.get("/seed", (req, res) => {
  HomeProduct.deleteMany({}, (error, allProducts) => { })
  HomeProduct.create(homeData, (error, data) => {
    res.redirect("/intravenous");
  });
})

// INDEX
rugRouter.get('/intravenous', (req, res) => {
  // res.send('mic check 1,2,1,2')
  HomeProduct.find({}, (error, allProducts) => {
    res.render('index.ejs', { homeproducts: allProducts })
  })
})

// NEW
rugRouter.get('/intravenous/new', (req, res) => {
  // res.send('create new product')
  res.render('new.ejs')
})

// DELETE / DESTROY
rugRouter.delete('/intravenous/:id', (req, res) => {
  // res.send('delete product here')
  HomeProduct.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
    res.redirect('/intravenous')
  })
})

// UPDATE
rugRouter.put('/intravenous/:id', (req, res) => {
  req.body.completed = (req.body.completed === "on") ? true : false;
  HomeProduct.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProduct) => {
      res.redirect(`/intravenous/${req.params.id}`)
    }
  )
})

// BUY BUTTON
rugRouter.put('/intravenous/cart/:id', (req, res) => {
  HomeProduct.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, purchasedProduct) => {
      purchasedProduct.qty -= 1
      purchasedProduct.save()
      res.redirect(`/intravenous/${req.params.id}`)
    })
})

// CREATE
rugRouter.post('/intravenous', (req, res) => {
  req.body.completed = req.body.completed === "on" ? true : false;
  HomeProduct.create(req.body, (error, createdProduct) => {
    res.redirect("/intravenous")
  })
})


// EDIT
rugRouter.get('/intravenous/:id/edit', (req, res) => {
  HomeProduct.findById(req.params.id, (err, product) => {
    res.render('edit.ejs', {
      product: product
    })
  })
})


// SHOW
rugRouter.get('/intravenous/:id', (req, res) => {
  HomeProduct.findById(req.params.id, (err, product) => {
    res.render('show.ejs', {
      product: product
    })
  })
})

module.exports = rugsRouter