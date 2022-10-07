import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroCardHolder extends BaseJSON {
  @Property
  name?: string
}
