import { createPost as createPostService, findAllPost as findAllPostService } from "../services/postService.js";

export async function createPost(req, res) {

   const post = await createPostService({
      caption: req.body.caption,
      localImagePath: req.file.path
   })

   return res.status(201).json({
      success: true,
      message: "Post Created Successfully",
      data: post
   })

}

export async function getAllPost(req,res){
   const posts = await findAllPostService();

   return res.status(200).json({
      success:true,
      message:"all posts fetched successfully",
      data:posts
   })
}