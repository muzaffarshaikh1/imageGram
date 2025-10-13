import mongoose from "mongoose";
import Post from "../schema/post";

export const createPost = async ({caption, image, user}) =>{
    try {
        // const post = Post.create({caption, image, user});
        const post = new Post({caption, image, user});
        await post.save();
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const findAllPost = async() =>{
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export const findPostById = async(id) =>{
    try {
        const post = await Post.findById({id});
        return post;
    } catch (error) {
        console.log(error);
    }
}