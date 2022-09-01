import BaseType from './BaseType';

export default class TransferStatus extends BaseType {
  static PENDING = 'PENDING';
  static BANK_PROCESSING = 'BANK_PROCESSING';
  static DONE = 'DONE';
  static CANCELLED = 'CANCELLED';
  static FAILED = 'FAILED';
}
