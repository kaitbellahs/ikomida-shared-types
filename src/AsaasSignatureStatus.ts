import BaseType from './BaseType';

export default class AsaasSignatureStatus extends BaseType {
  static ACTIVE = 'ACTIVE';
  static CONFIRMED = 'CONFIRMED';
  static AVAILABLE = 'AVAILABLE';
  static CANCELED = 'CANCELED';
  static IN_DISPUTE = 'IN_DISPUTE';
}
