import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IAsaasError from './IAsaasError';
import { Property } from '../../Decorators/Property';

export default class IAsaasErrors extends BaseJSON {
  @Property
  @FromJSON
  errors?: IAsaasError[];
}
