import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import CBusinessTimeHours from './CBusinessTimeHours';
import { Nullable } from '../Decorators';

export default class CBusinessTime extends BaseJSON {
  @Property
  @Nullable
  days?: number[];
  @Property
  @FromJSON(CBusinessTimeHours)
  @Nullable
  hours?: CBusinessTimeHours[];
}
