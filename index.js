const path =require('path');
const express = require('express');

const app = new express();

// listerning port 
app.listen(4000,()=>{
    console.log("app listering on port 4000")
})

// assert folder 
app.use(express.static('public'))


// defining routes 
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})
app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
})

