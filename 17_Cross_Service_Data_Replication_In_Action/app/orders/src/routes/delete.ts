import express, { Request, Response } from 'express';

const router = express.Router();

router.delete('/api/orders/:orderId', () => (req: Request, res: Response) => {
  return res.send({});
});

export { router as deleteOrderRouter };
