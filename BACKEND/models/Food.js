const express = require('express');
const app = express();
require('../db'); 
port = 5000;
const mongoose = require('mongoose');

//schema
const schema = new mongoose.Schema({
    Fname:{type:String,required:true},
    orderId:{type:Number,require:true},
    Cust_Name:{type:String,required:true}       
});

//Model
const food = new mongoose.model('food',schema);

//input
const newfood = new food({
    Fname:'Biryani',
    orderId:101,
    Cust_Name:'Ritheesh'
}) 

//save

newfood.save().then(()=>{
    console.log("Food_Saved");
}).catch((err)=>{
    console.log("Error",err);
})



