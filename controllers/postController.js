import { createPost as createPostService } from "../services/postService.js";

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