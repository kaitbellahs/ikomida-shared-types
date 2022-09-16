import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IvendorPagseguroIntegration extends BaseJSON {
  @Property
  state: string;
  @Property
  code: string;

  constructor(state: string, code: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.state = state
    this.code = code
  }

}
