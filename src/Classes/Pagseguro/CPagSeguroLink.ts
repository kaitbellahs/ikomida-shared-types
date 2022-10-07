import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroLink extends BaseJSON {
  @Property
  rel?: string
  @Property
  href?: string
  @Property
  media?: string
  @Property
  type?: string
}
