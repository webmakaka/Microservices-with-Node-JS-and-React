import express, { Request, Response } from 'express';
import { Ticket } from '../models/Ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});
  return res.send(tickets);
});

export { router as indexTicketRouter };
