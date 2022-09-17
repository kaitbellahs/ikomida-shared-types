import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IvendorPagseguroIntegration extends BaseJSON {
  @Property
  state!: string;
  @Property
  code!: string;

  static init(state: string, code: string,
    id?: string,
    timestamp?: number,
  ): IvendorPagseguroIntegration {
    return this.createInitObject(arguments)
  }
}