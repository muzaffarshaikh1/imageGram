import { createPostService, findAllPostService } from "../services/postService.js";

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

   try {
      const limit = Number(req.query.limit) || 10;
      const offset = Number(req.query.offset) || 0;
      
      const paginatedPosts = await findAllPostService(offset,limit);

      return res.status(200).json({
         success:true,
         message:"all posts fetched successfully",
         data:paginatedPosts
      })
   } catch (error) {
      console.log("error in getAllPost controller:",error);
      return res.status(500).json({
         success:false,
         message:"internal server error",
      })
   }
}