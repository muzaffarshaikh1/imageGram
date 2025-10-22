import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:['Post','Comment']
    },
    likableId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
});

const like = mongoose.model('Like',likeSchema); 

export default like;