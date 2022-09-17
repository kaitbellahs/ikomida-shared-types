import IPagSeguroInstructionLines from './IPagSeguroInstructionLines';
import IPagSeguroBoletoHolder from './IPagSeguroBoletoHolder';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroBoleto extends BaseJSON {
  @Property
  @FromJSON
  instructionLines?: IPagSeguroInstructionLines;
  @Property
  @FromJSON
  holder?: IPagSeguroBoletoHolder;
  @Property
  due_date?: string;
}
