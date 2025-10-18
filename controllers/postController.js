import { json } from "express";
import {uploadFileToCloudinary} from "../uploads/uploadFileToCloudinary.js";

export async function createPost(req,res){
   try {
     
    const caption = req.body.caption;
    const image = await uploadFileToCloudinary(req.file.path);


    res.json({caption,image:image.secure_url});

    
    
   } catch (error) {
    console.log("error in create post:",error)
    res.json({message:'error in creating post'});
   }
}