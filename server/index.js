import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';


const app = express();

app.use(cors());
app.use('/',Route);
dotenv.config();

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

DefaultData();

app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`));