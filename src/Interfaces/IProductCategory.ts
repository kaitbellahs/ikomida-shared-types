import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IProductCategory extends BaseJSON {
  @Property
  title!: string;
  @Property
  image?: string;
  @Property
  description?: string;

  static init(title: string, image?: string, description?: string,
    id?: string,
    timestamp?: number,
  ): IProductCategory {
    return this.createInitObject(arguments)
  }
}
