import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'
import CEmailAddress from './CEmailAddress'
import CMessage from './CMessage'

export default class CEmail extends BaseJSON {
  @Property
  from!: CEmailAddress
  @Property
  to!: CEmailAddress
  @Property
  message!: CMessage
}
