const mongoose = require('mongoose');

const uri ='mongodb+srv://Host:Ritheesh123@cluster0.qr68tq8.mongodb.net/'
mongoose.connect(uri)
const connection=mongoose.connection

connection.once('open', ()=>{
    console.log("Connected")
})