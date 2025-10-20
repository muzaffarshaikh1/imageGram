import express from 'express';
import { getUserProfile, signin,signUp } from '../../controllers/userController.js';
import { validate } from '../../validators/zodValidator.js';

// validation schema's
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';

const router = express.Router();

router.get('/profile',getUserProfile);
router.post('/signup',validate(zodSignupSchema),signUp);
router.post('/signin',validate(zodSigninSchema),signin);

export default router;