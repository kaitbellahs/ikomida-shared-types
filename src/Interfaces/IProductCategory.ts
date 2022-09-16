import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IProductCategory extends BaseJSON {
  @Property
  title: string;
  @Property
  image?: string;
  @Property
  description?: string;

  constructor(title: string, image?: string, description?: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.title = title
    this.image = image
    this.description = description
  }

}
