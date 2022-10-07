import { Enum } from '../../Decorators/Enum.js'
import { TAsaasStatment } from '../../Types/Asaas/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasStatment extends BaseJSON {
  @Property
  object?: string
  @Property
  value?: number
  @Property
  balance?: number
  @Property
  @Enum
  type?: TAsaasStatment
  @Property
  date?: string
  @Property
  description?: string
  @Property
  paymentID?: string
  @Property
  transferID?: string
  @Property
  anticipationID?: string
  @Property
  billID?: string
  @Property
  invoiceID?: string
  @Property
  paymentDunningID?: string
  @Property
  creditBureauReportID?: string
}
