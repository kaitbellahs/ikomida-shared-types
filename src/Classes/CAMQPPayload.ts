import { Property } from '../Decorators/Property';
import TAMQPPayload from '../Types/TAMQPPayload';
import BaseJSON from './BaseJSON';

export default class CAMQPPayload<T extends TAMQPPayload> extends BaseJSON {
  @Property
  object!: T;
  @Property
  method!: string;
}
