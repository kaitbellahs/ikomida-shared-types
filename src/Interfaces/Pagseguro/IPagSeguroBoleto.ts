import IPagSeguroInstructionLines from "./IPagSeguroInstructionLines";
import IPagSeguroBoletoHolder from "./IPagSeguroBoletoHolder";


export default interface IPagSeguroBoleto {
    instructionLines: IPagSeguroInstructionLines;
    holder: IPagSeguroBoletoHolder;
    due_date: string;
}
