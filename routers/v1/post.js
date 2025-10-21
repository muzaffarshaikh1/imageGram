import express from 'express';
import { createPost, getAllPost, getPost, deletePost, updatePost } from '../../controllers/postController.js';
import upload from '../../config/multerConfig.js';
import { isAdmin, isAuthenticated } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/',getAllPost);
router.get('/:id',getPost);
router.put('/:id',isAuthenticated,isAdmin,upload.single('image'),updatePost);
router.delete('/:id',isAuthenticated,deletePost);
router.post('/',isAuthenticated,upload.single('image'),createPost);

export default router;