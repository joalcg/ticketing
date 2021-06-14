import express, { Request, Response } from 'express';
import { requireAuth, NotAuthorizedError, NotFoundError, OrderStatus } from '@joalcgtickets/common';
import { Order } from '../models/order';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.delete(
    '/api/orders/:orderId',
    requireAuth, 
    async (req: Request, res: Response) => {
        const { orderId } = req.params;

        const order = await Order.findById(orderId);

        if (!order) {
            throw new NotFoundError();
        }

        if (order.userId !== req.currentUser!.id) {
            throw new NotAuthorizedError();
        }

        order.status = OrderStatus.Cancelled;
        order.save();

        new OrderCancelledPublisher(natsWrapper.client).publish({
            id: order.id,
            version: 1,//order.version,
            ticket: {
                id: order.ticket.id
            }
        });

        res.status(204).send(order);
    }
);

export { router as deleteOrderRouter };