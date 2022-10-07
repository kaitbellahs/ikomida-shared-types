import TBaseType from '../TBaseType.js'

export default class TAsaasTransferStatus extends TBaseType {
  static PENDING = new TAsaasTransferStatus('PENDING')
  static BANK_PROCESSING = new TAsaasTransferStatus('BANK_PROCESSING')
  static DONE = new TAsaasTransferStatus('DONE')
  static CANCELLED = new TAsaasTransferStatus('CANCELLED')
  static FAILED = new TAsaasTransferStatus('FAILED')
}
