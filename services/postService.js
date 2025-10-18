import {createPost as createPostRepository, findAllPost as findAllPostRepostory } from '../repositories/postRepository.js'
import { uploadFileToCloudinary } from "../uploads/uploadFileToCloudinary.js";

export const createPost = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();

    // upload image to cloudinary 
    const image = await uploadFileToCloudinary(createPostObject.localImagePath);

    console.log(caption, image.secure_url);

    // const user = createPostObject.user;

    const post = await createPostRepository(caption,image.secure_url);
    return post;

}

export const findAllPost = async () =>{
    const posts = findAllPostRepostory();
    return posts;
}