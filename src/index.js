//mongoose kis trh se db se cnnct krta h
// require('dotenv').config({path:'./env'})


import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path:'./env'
})
connectDB()
//bcz asyc function return promises so we use trn and catch method to resolve 
.then(()=>{
    app.on("error" ,(error)=>{console.log('error',error)
        throw error})
  app.listen(process.env.PORT ||8000,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
  })
 } )
.catch( ()=>{
console.log( "Mongodb connection failed !!!",err)
})














/*
 import express from "express"
 const app=express()

;(async()=>{
    try{
   await mongoose.connect(`$process.env.MONGODB_URI}/${DB_NAME}`)
    //db conect ho chuka h uske next line me listner dikhte h jo ki btate h ki error 
    // db connection m nhi khi or h may be express ki app not able to talk
    app.on("error",(error)=>{
        console.log('ERROR:',error);
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
    }catch(error){
      console.error('ERROR :',error)
      throw error
    }
})()
    */