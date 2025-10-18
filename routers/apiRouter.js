import express from 'express';

// routers
import v1Router from './v1/v1Router.js'

const router = express.Router();

router.use('/v1',v1Router);

export default router;