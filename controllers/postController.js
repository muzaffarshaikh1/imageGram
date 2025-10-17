import cloudinary from "../config/cloudinaryConfig.js";

export async function createPost(req,res){
   try {
     
     const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'imageGram',
    });

    if(result){
        res.json({message:'post created successfully!'})
    }else{
        res.json({message:'error while file upload!'})
    }
   } catch (error) {
    console.log("error in create post:",error)
    res.json({message:'error in creating post'});
   }
}