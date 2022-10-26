const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Welcome to my shop!')
})
//INDUCE
// INDEX
// NEW
// DELETE / DESTROY
// UPDATE
// CREATE
// EDIT
// SHOW

// LISTENER
app.listen(PORT, () => console.log(`you are now listening to the smooth sound of port ${PORT}...`))