import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minLength:1,
    },
    onModel:{
        type:String,
        required:true,
        enum:['Post','Comment']
    },
    commentableId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    replies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment', 
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Likes', 
        }
    ]
});

const comment = mongoose.model('Comment',commentSchema); 

export default comment;