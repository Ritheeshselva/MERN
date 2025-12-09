const mongoose = require('mongoose');

const uri ='mongoose uri/'
mongoose.connect(uri)
const connection=mongoose.connection

connection.once('open', ()=>{
    console.log("Connected")
})
