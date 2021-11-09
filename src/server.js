'use strict'

const express = require('express');
const app=express();
require('dotenv').config();
const notFoundHandler=require('./error-handlers/404')
const errorHandler=require('./error-handlers/500')
const logger=require('./middleware/logger')
const validator=require('./middleware/validator')
const PORT=process.env.PORT


app.use(logger)

app.get('/error',(req,res)=>{
    throw new Error("you made an error")
})

app.get('/hello',(req,res)=>{
    res.status(200).json({message:"hello"})
})
app.get('/val',validator,(req,res)=>{
res.status(200).json({message:"val is working"})
})

app.post('val/orange',validator,(req,res)=>{
    res.status(200).json({message:"val is working with orange"})
})
app.use(errorHandler)
app.use("*",notFoundHandler)


function start(){
    app.listen(PORT,()=>{
        console.log(`Server is Ruinng with PORT ${PORT}`);
    })
}

module.exports ={
    server:app,
    start :start
}