const mongoose = require('mongoose')

const homeProductSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    completed: Boolean     
})

const homeProducts = mongoose.model("homeProducts", homeProductSchema)
module.exports = homeProducts