import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import CAsaasError from './CAsaasError';
import { Property } from '../../Decorators/Property';

export default class CAsaasErrors extends BaseJSON {
  @Property
  @FromJSON
  errors?: CAsaasError[];
}
