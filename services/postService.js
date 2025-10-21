import {createPost, findAllPost, countAllPost, findPostById, deletePostById, updatePostById } from '../repositories/postRepository.js'
import { uploadFileToCloudinary } from "../uploads/uploadFileToCloudinary.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();

    // upload image to cloudinary 
    const image = await uploadFileToCloudinary(createPostObject.localImagePath);

    const user = createPostObject.user;

    const post = await createPost(caption,image.secure_url,user);
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


export const deletePostService = async (postId) =>{
    const post = await deletePostById(postId);

    return post;
}

export const updatePostService = async (postId, updateObject) =>{

    if(updateObject?.localImagePath){
        
        // upload image to cloudinary 
        const image = await uploadFileToCloudinary(updateObject.localImagePath);
        updateObject['image'] = image.secure_url;

        delete updateObject['localImagePath'];
    }

    const response = await updatePostById(postId,updateObject);

    return response;
}