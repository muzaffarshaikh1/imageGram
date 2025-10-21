import Post from "../schema/post.js";

export const createPost = async (caption, image,user) =>{
    try {
        // const post = Post.create({caption, image, user});
        const post = new Post({caption, image,user});
        await post.save();
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const findAllPost = async(offset,limit) =>{
    try {
        const posts = await Post.find().sort({createdAt:-1}).skip(offset).limit(limit).populate('user','username email _id');
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export const countAllPost = async()=>{
    try {
        const count = await Post.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
    }
}

export const findPostById = async(id) =>{
    try {
        const post = await Post.findById(id).populate('user','username email _id');
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const deletePostById = async(id) =>{
    try {
        const post = await Post.findByIdAndDelete(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const updatePostById = async(id,updateObject) =>{
    try {
        const response = await Post.findByIdAndUpdate(id,updateObject,{new:true});
        return response;
    } catch (error) {
        console.log(error);
    }
}