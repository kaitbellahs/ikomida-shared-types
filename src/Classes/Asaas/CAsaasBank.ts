import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasBank extends BaseJSON {
  @Property
  ispb?: string
  @Property
  code?: string
  @Property
  name?: string
}
