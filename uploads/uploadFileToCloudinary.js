import cloudinary from "../config/cloudinaryConfig.js";
import fs from 'fs';

export const uploadFileToCloudinary = async(localFilePath) => {
   
    try {
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: 'imageGram',
        });
    
        // delete from local storage
        fs.unlinkSync(localFilePath);
        return response;
        
    } catch (error) {
        console.log("error in uploadFileToCloudinary:",error)
        fs.unlinkSync(localFilePath);
    }

}