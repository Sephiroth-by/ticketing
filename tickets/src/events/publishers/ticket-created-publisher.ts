import { Publisher, Subjects, TicketCreatedEvent } from '@septickets/common-v2';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
