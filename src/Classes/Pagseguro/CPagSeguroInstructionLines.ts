import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CPagSeguroInstructionLines extends BaseJSON {
  @Property
  line_1?: string
  @Property
  line_2?: string
}
