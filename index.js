import express from 'express';
import connectDb from './config/dbConfig.js';

import apiRouter from './routers/apiRouter.js'

const app = express();

// middlwares
app.use(express.json());
// app.use(express.text());
app.use(express.urlencoded({ extended: true }));


app.use("/api",apiRouter);

app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})