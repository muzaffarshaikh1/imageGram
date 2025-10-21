import express from 'express';
import connectDb from './config/dbConfig.js';

import apiRouter from './routers/apiRouter.js'
import { isAuthenticated } from './middlewares/authMiddleware.js';

const app = express();

// middlwares
app.use(express.json());
// app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api",apiRouter);
app.get("/ping",isAuthenticated,(req,res)=>{
    console.log(req.user);
    res.send(`pong, ${req?.user?.username}`);
})
app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})