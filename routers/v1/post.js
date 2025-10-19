import express from 'express';
import { createPost, getAllPost, getPost, deletePost } from '../../controllers/postController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.get('/',getAllPost);
router.get('/:id',getPost);
router.delete('/:id',deletePost);
router.post('/',upload.single('image'),createPost);

export default router;