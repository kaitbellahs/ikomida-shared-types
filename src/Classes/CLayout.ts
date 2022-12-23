import { Property } from '../Decorators/Property.js'
import TAnimation from '../Types/TAnimation.js'
import BaseJSON from './BaseJSON.js'
export default class CLayout extends BaseJSON {
  @Property
  link!: string
  @Property
  background!: string
  @Property
  itemBackground!: string
  @Property
  backgroundImage!: string
  @Property
  product!: {
    animation: {
      in: string
      out: string
    }
  }
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
