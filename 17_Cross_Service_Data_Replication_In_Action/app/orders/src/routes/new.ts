import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/orders', () => (req: Request, res: Response) => {
  return res.send({});
});

export { router as newOrderRouter };
