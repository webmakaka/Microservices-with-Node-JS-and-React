import express from 'express';

const router = express.Router();

router.get('/api/usrs/currentuser', () => {});

export { router as currentUserRouter };
