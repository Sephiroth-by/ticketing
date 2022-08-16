import { Publisher, Subjects, TicketUpdatedEvent } from '@septickets/common-v2';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
