import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IBusinessTimeHours from './IBusinessTimeHours';

export default class IBusinessTime extends BaseJSON {
  @Property
  days?: number[];
  @Property
  @FromJSON(IBusinessTimeHours)
  hours?: IBusinessTimeHours[];
}
