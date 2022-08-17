import { Publisher, Subjects, TicketUpdatedEvent } from '@septickets/common-v2';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
