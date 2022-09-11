import BaseJSON from './BaseJSON';

export default class IRandCode extends BaseJSON {
  count?: number;
  length?: number;
  charset?: string;
  prefix?: string;
  postfix?: string;
  pattern?: string;
}
