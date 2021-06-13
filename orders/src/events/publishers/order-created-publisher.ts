import { Publisher, OrderCreatedEvent, Subjects } from '@joalcgtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}