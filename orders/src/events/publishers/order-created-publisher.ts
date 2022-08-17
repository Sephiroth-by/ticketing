import { Publisher, OrderCreatedEvent, Subjects } from '@septickets/common-v2';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
