import BaseJSON from './BaseJSON';
import IBusinessTimeHours from './IBusinessTimeHours';

export default class IBusinessTime extends BaseJSON {
  days?: number[];
  hours?: IBusinessTimeHours[];
}
