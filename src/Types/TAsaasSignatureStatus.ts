import TBaseType from './TBaseType';

export default class TAsaasSignatureStatus extends TBaseType {
  static ACTIVE = new TAsaasSignatureStatus('ACTIVE');
  static CONFIRMED = new TAsaasSignatureStatus('CONFIRMED');
  static AVAILABLE = new TAsaasSignatureStatus('AVAILABLE');
  static CANCELED = new TAsaasSignatureStatus('CANCELED');
  static IN_DISPUTE = new TAsaasSignatureStatus('IN_DISPUTE');
}
