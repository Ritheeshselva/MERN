const express = require('express');
const app = express()
// require('dotenv').config();
require('./db');
const port=3000
const mongoose = require('mongoose');

app.get('/',(req,res)=>{
    res.send("Hello")  //http://localhost:3000
});

// app.get('/users/:userId',(req,res)=>{
//     const userid = req.params.userId;
//     res.send(`User ID is: ${userid}`); //http://localhost:3000/users/66
// });

// app.get('/users/:userId/profile',(req,res)=>{
//     const userid = req.params.userId;
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`Profile of user : ${userid}, Name: ${name}, Age: ${age}`) //http://localhost:3000/users/66/profile?name=Ritheesh&age=21
// })

const schema =new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true}
});

const User = mongoose.model('User',schema);

const newuser = new User({
    username:'Ritheesh',
    email:'ritheesh@gmail.com',
    age:21
})

newuser.save().then (()=>{
    console.log("user saved")
}).catch((err)=>{
    console.error("Error",err)
});

// app.listen(process.env.PORT,()=>{
//     console.log(`Server on:${process.env.PORT}`)  //default lines
// });

//or
app.listen(port,()=>{
 console.log(`server on:${port}`);
})   

