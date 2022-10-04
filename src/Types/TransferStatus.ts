import TBaseType from './TBaseType'

export default class TransferStatus extends TBaseType {
  static PENDING = new TransferStatus('PENDING')
  static BANK_PROCESSING = new TransferStatus('BANK_PROCESSING')
  static DONE = new TransferStatus('DONE')
  static CANCELLED = new TransferStatus('CANCELLED')
  static FAILED = new TransferStatus('FAILED')
}
