import Post from "../schema/post.js";

export const createPost = async (caption, image) =>{
    try {
        // const post = Post.create({caption, image, user});
        const post = new Post({caption, image});
        await post.save();
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const findAllPost = async(offset,limit) =>{
    try {
        const posts = await Post.find().sort({createdAt:-1}).skip(offset).limit(limit);
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
        const post = await Post.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}