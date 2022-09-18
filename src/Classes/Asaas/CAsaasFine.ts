import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';
import { Nullable } from '../../Decorators';

export default class CAsaasFine extends BaseJSON {
  @Property
  @Nullable
  value?: number;
  @Property
  @Nullable
  type?: string;

  static init(value?: number, type?: string): CAsaasFine {
    return this.createInitObject(arguments);
  }
}
