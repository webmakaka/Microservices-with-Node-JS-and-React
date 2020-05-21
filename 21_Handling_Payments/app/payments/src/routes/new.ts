import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  BadRequstError,
  NotFoundError,
  NotAuthorizedError,
  OrderStatusEnum,
} from '@grider-ms-tickets/common';
import { Order } from '../models/Order';

const router = express.Router();
router.post(
  '/api/payments',
  requireAuth,
  [body('token').not().isEmpty(), body('orderId').not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const { token, orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    if (order.status === OrderStatusEnum.Cancelled) {
      throw new BadRequstError('Cannot pay for an cancelled order');
    }

    return res.send({ success: true });
  }
);

export { router as createChargeRouter };
