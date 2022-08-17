import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@septickets/common-v2';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
