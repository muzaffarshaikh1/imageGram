import express from 'express';
import { getUserProfile } from '../../controllers/userController.js';
import { signUp } from '../../controllers/userController.js';
import { validate } from '../../validators/zodValidator.js';

// validation schema's
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';
const router = express.Router();

router.get('/profile',getUserProfile);
router.post('/signup',validate(zodSignupSchema),signUp);

export default router;