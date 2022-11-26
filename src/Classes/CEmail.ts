import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'
import CEmailAddress from './CEmailAddress.js'
import CMessage from './CMessage.js'

export default class CEmail extends BaseJSON {
  @Property
  from!: CEmailAddress
  @Property
  to!: CEmailAddress
  @Property
  message!: CMessage
}
