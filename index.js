import express from 'express';
import connectDb from './config/dbConfig.js';

import cloudinary from './utils/cloudinary.js';
import upload from './middlewares/multer.js';
import fs from 'fs';

const app = express();

app.get('/',(req,res)=>{
    res.send('<form action="/upload-file" method="post" enctype="multipart/form-data"><input type="file" name="file" /><button type="submit">upload</button></form>');
});

app.post('/upload-file',upload.single('file'),async function (req, res) {
  try {

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads', // optional folder name
    });

    console.log("Cloudinary upload success:", result);

    fs.unlinkSync(req.file.path);

    res.json({
      message: 'File uploaded successfully!',
      cloudinary_url: result.secure_url,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: 'Upload failed!' });
  }
  
});

app.listen(3000,()=>{
    console.log("server running");
    connectDb();
})