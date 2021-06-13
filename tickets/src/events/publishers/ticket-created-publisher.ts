import { Publisher, TicketCreatedEvent, Subjects } from '@joalcgtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}