import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CCreditCardRequest extends BaseJSON {
  @Property
  number!: string
  @Property
  validity!: string
  @Property
  code!: number
  @Property
  holder!: string
}
