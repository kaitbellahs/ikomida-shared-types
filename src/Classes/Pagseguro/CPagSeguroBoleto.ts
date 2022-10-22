import CPagSeguroInstructionLines from './CPagSeguroInstructionLines.js'
import CPagSeguroBoletoHolder from './CPagSeguroBoletoHolder.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroBoleto extends BaseJSON {
  @Property
  @FromJSON
  instructionLines?: CPagSeguroInstructionLines
  @Property
  @FromJSON
  holder?: CPagSeguroBoletoHolder
  @Property
  due_date?: string
}
