import express from 'express';
import { createPost, getAllPost } from '../../controllers/postController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.get('/',getAllPost);
router.post('/',upload.single('image'),createPost);

export default router;