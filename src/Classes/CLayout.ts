import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'
export default class CLayout extends BaseJSON {
  @Property
  link!: string
  @Property
  background!: string
  @Property
  color!: string
  @Property
  header!: {
    background: string
    color: string
    menuHamburger: string
  }
  @Property
  dialog!: {
    background: string
    color: string
  }
  @Property
  tabs!: {
    background: string
    color: string
  }
  @Property
  button!: {
    background: string
    color: string
  }
}
