import { Publisher, Subjects, OrderCancelledEvent } from '@joalcgtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}