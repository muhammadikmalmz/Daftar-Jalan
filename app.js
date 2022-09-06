const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const jalanRoutes = require('./routes/jalan')

app.use('/jalan', jalanRoutes)
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')    
})

app.listen(process.env.PORT, () => { 
    console.log(`Server running in ${process.env.PORT}`)
 })
