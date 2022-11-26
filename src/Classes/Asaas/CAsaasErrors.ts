import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CAsaasError from './CAsaasError.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasErrors extends BaseJSON {
  @Property
  @FromJSON
  errors?: CAsaasError[][]
}
