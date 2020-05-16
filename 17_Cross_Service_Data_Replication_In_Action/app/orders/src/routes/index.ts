import express, { Request, Response } from 'express';
import { requireAuth } from '@grider-ms-tickets/common';
import { Order } from '../models/Order';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
  const orders = await Order.find({
    userId: req.currentUser!.id,
  }).populate('ticket');

  return res.send(orders);
});

export { router as indexOrderRouter };
