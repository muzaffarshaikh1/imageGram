import {createPost, findAllPost, countAllPost, findPostById } from '../repositories/postRepository.js'
import { uploadFileToCloudinary } from "../uploads/uploadFileToCloudinary.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();

    // upload image to cloudinary 
    const image = await uploadFileToCloudinary(createPostObject.localImagePath);

    console.log(caption, image.secure_url);

    // const user = createPostObject.user;

    const post = await createPost(caption,image.secure_url);
    return post;

}

export const findAllPostService = async (offset,limit) =>{
    const posts = await findAllPost(offset,limit);

    const totalDocuments = await countAllPost();

    const totalPages = Math.ceil(totalDocuments/limit);

    return {
        posts,totalPages,totalDocuments
    };
}

export const findPostService = async (postId) =>{
    const post = await findPostById(postId);

    return post;
}
