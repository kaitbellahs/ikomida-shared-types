import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CAsaasStatistics extends BaseJSON {
  @Property
  quantity?: number
  @Property
  value?: number
  @Property
  netValue?: number
}
