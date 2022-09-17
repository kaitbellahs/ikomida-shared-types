import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class COrderPreparation extends BaseJSON {
  @Property
  min!: number;
  @Property
  max!: number;

  static init(min: number, max: number, id?: string, timestamp?: number): COrderPreparation {
    return this.createInitObject(arguments);
  }
}
