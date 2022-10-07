import { Property } from '../Decorators/Property.js'
import TAMQPPayload from '../Types/TAMQPPayload.js'
import BaseJSON from './BaseJSON.js'

export default class CAMQPPayload<T extends TAMQPPayload> extends BaseJSON {
  @Property
  object!: T
  @Property
  method!: string
}
