import CPagSeguroInstructionLines from './CPagSeguroInstructionLines';
import CPagSeguroBoletoHolder from './CPagSeguroBoletoHolder';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroBoleto extends BaseJSON {
  @Property
  @FromJSON
  instructionLines?: CPagSeguroInstructionLines;
  @Property
  @FromJSON
  holder?: CPagSeguroBoletoHolder;
  @Property
  due_date?: string;
}
