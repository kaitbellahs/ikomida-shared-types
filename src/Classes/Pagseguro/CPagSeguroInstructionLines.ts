import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroInstructionLines extends BaseJSON {
  @Property
  line_1?: string
  @Property
  line_2?: string
}
