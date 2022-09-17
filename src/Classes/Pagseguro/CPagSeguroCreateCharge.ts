import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';
import CPagSeguroCard from './CPagSeguroCard';
import CPagseguroCreateChargeConfig from './CPagseguroCreateChargeConfig';
import { Nullable } from '../../Decorators';
import { IMetadata } from '../../Interfaces';

export default class CPagSeguroCreateCharge extends BaseJSON {
  @Property
  reference!: string;
  @Property
  amount!: number;
  @Property
  @Enum
  type!: TPagSeguroPaymentMethod;
  @Property
  statementID!: string;
  @Property
  @FromJSON
  @Nullable
  config?: CPagseguroCreateChargeConfig;
  @Property
  @Nullable
  contractID?: string;
  @Property
  @FromJSON
  @Nullable
  card?: CPagSeguroCard;
  @Property
  @Nullable
  cardToken?: string;
  @Property
  @Nullable
  description?: string;
  @Property
  @Nullable
  metadata?: IMetadata;

  static init(
    reference: string,
    amount: number,
    type: TPagSeguroPaymentMethod,
    statementID: string,
    config?: CPagseguroCreateChargeConfig,
    contractID?: string,
    card?: CPagSeguroCard,
    cardToken?: string,
    description?: string,
    metadata?: IMetadata,
    id?: string,
    timestamp?: number,
  ): CPagSeguroCreateCharge {
    return this.createInitObject(arguments);
  }
}
