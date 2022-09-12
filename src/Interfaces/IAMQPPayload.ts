import TAMQPPayload from '../Types/TAMQPPayload';
import BaseJSON from './BaseJSON';

export default class IAMQPPayload<T extends TAMQPPayload> extends BaseJSON {
  object?: T;
  method?: string;
}
