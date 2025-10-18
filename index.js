import express from 'express';
import connectDb from './config/dbConfig.js';

import upload from './config/multerConfig.js';
import { createPost,getAllPost } from './controllers/postController.js';

const app = express();

// middlwares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.get('/posts',getAllPost);
app.post('/posts',upload.single('image'),createPost);

app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})