import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@septickets/common-v2';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
