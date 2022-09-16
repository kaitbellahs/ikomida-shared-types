import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroInstructionLines extends BaseJSON {
  @Property
  line_1?: string;
  @Property
  line_2?: string;
}
