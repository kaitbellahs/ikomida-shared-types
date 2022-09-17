import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import CVendorLimit from './CVendorLimit';
import BaseJSON from './BaseJSON';

export default class CVendorLimits extends BaseJSON {
  @Property
  @FromJSON
  limits!: CVendorLimit;

  @Property
  @FromJSON
  used!: CVendorLimit;

  static init(limits: CVendorLimit, used: CVendorLimit, id?: string, timestamp?: number): CVendorLimits {
    return this.createInitObject(arguments);
  }
}
