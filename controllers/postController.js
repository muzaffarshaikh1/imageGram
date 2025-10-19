import { createPostService, findAllPostService, findPostService, deletePostService } from "../services/postService.js";

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


export async function getPost(req,res){
   try {
      const postId = req.params.id;
      
      const post = await findPostService(postId);

      return res.status(200).json({
         success:true,
         message:"post fetched successfully",
         data:post
      })
   } catch (error) {
      console.log("error in getPost controller:",error);
      return res.status(500).json({
         success:false,
         message:"internal server error",
      })
   }
}

export async function deletePost(req,res){
   try {
      const postId = req.params.id;
      
      const post = await deletePostService(postId);

      return res.status(200).json({
         success:true,
         message:"post deleted successfully",
      })
   } catch (error) {
      console.log("error in deletePost controller:",error);
      return res.status(500).json({
         success:false,
         message:"internal server error",
      })
   }
}