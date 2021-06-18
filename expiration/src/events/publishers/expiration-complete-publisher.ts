import { Publisher, ExpirationCompleteEvent, Subjects } from '@joalcgtickets/common';


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
    
}