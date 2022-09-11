import BaseJSON from './BaseJSON';
import IProduct from './IProduct';

export default class ICategoryProducts extends BaseJSON {
  id?: string;
  title?: string;
  order?: string;
  description?: string;
  createdAt?: string;
  products?: IProduct[];
}
