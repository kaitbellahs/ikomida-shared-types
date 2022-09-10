import IPagSeguroInstructionLines from './IPagSeguroInstructionLines';
import IPagSeguroBoletoHolder from './IPagSeguroBoletoHolder';
import BaseJSON from '../BaseJSON';

export default class IPagSeguroBoleto extends BaseJSON {
  instructionLines?: IPagSeguroInstructionLines;
  holder?: IPagSeguroBoletoHolder;
  due_date?: string;
}
