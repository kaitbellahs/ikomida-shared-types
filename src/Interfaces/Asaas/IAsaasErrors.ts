import BaseJSON from '../BaseJSON';
import IAsaasError from './IAsaasError';

export default class IAsaasErrors extends BaseJSON {
  errors?: IAsaasError[];
}
