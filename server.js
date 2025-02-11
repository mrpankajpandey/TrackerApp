import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

import connectDB from './config/db.js';
import router from './routes/api.js';
dotenv.config();
const app = express();
app.use(express.json({ limit: '10mb' })); // Increase to 10MB
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use('/api/v1',router);
app.get('/health',(req,res)=>{
    res.send("Server is running")
})
app.listen(process.env.PORT ||8000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT ||8000}`);
  });
