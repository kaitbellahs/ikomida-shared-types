import { Enum } from '../Decorators/Enum';
import TDiscount from '../Types/TDiscount';
import TSupport from '../Types/TSupport';
import BaseJSON from './BaseJSON';
import IKeyValue from './IKeyValue';

export default class IPlan extends BaseJSON {
  name?: string;
  price?: number;
  discountedPrice?: number;
  discount?: number;
  @Enum
  discountType?: TDiscount;
  order?: number;
  staff?: number;
  products?: number;
  categories?: number;
  pushNotifications?: number;
  orders?: number;
  coupons?: number;
  billing?: number;
  details?: IKeyValue[];
  support?: string[];
  highlighted?: boolean;
}
