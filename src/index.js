import dotenv from 'dotenv'
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"

import { app } from './app.js';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port :${process.env.PORT}`)
    })
    app.on("error",(error)=>{
          console.log("ERROR OCCURED IN EXPRESS !!!")
          throw error
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNNECTION FAILED !!!",error)
})







// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);   
//     console.log("Connected to MongoDB");
//     app.on("error", (error) => {
//       console.error("Error in Express app:", error);
//       throw error; // Rethrow the error to be caught by the outer catch block
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   } 
// })();