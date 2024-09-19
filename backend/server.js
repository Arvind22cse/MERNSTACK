 import express from "express";
 import dotenv from "dotenv";
 import path from 'path';
import {connectDB} from "./config/db.js";
// import Product from "./models/product.model.js";
// import mongoose from "mongoose";

import productRoutes from "./routes/product.route.js";
// const cors = require('cors');
import cors from 'cors';


dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT ||5000;
//yLPGp7p8W2RCoDVt     arvindm22cse
const __dirname=path.resolve();
app.use("/api/products",productRoutes);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist"))); 
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});
}
// console.log(process.env.MONGO_URI);
app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at http://localhost:`+PORT);
    
});