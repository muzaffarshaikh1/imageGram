import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        minLength:5,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Comment'
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Like'
        }
    ],
},{timestamps:true});

const post = mongoose.model('Post',postSchema);

export default post;