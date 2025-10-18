import express from 'express';
import connectDb from './config/dbConfig.js';

// routers
import postRouter from './routers/post.js';
import userRouter from './routers/user.js'

const app = express();

// middlwares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use('/posts',postRouter);
app.use('/users',userRouter)

app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})