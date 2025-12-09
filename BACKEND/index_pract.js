const express=require('express');
const app=express();
port =5000;

app.get('/',(req,res)=>{
    res.send("Hello")  //http://localhost:5000
});

app.get('/user/:userId',(req,res)=>{
    const userid = req.params.userId;
    res.send(`user_id is: ${userid}`); // http://localhost:5000/user/130
});

app.get('/user/:userId/profile',(req,res)=>{
    const userid =req.params.userId;
    const name = req.query.name;
    const age = req.query.age;

    res.send(`User_id: ${userid}  Name:${name} age:${age}`)  // http//localhost:5000/user/130/profile?name=Ritheesh & age=21
})

5
app.listen(port,()=>{
    console.log(`server is on: ${port}`)
});