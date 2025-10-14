import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from'dotenv';
dotenv.config();

// Configuration
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImageToCloud = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath,{resource_type:'auto'});

        if(response){
         console.log("file uploaded successfully");   
        }
        return response;
    } catch (error) {
        console.log("error:",error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export default uploadImageToCloud;
