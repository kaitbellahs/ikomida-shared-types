import TBaseType from "../TBaseType"

export default class TAsaasTransferOperation extends TBaseType {
    static PIX = new TAsaasTransferOperation('PIX')
    static TED = new TAsaasTransferOperation('TED')
    static INTERNAL = new TAsaasTransferOperation('INTERNAL')
}
