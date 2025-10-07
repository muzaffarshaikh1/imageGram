import express from 'express';
import connectDb from './config/dbConfig.js';
const app = express();

app.get('/',(req,res)=>{
    res.send('Home');
});

app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})