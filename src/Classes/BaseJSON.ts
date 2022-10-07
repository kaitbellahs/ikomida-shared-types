import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import { TBaseType } from '../Types'

const STRIP_COMMENTS =
  /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/gm
const ARGUMENT_NAMES = /([^\s,]+)/g

export default abstract class BaseJSON {
  //MARK: -- instance
  @Property
  @Nullable
  id?: string
  @Property
  @Nullable
  timestamp?: number

  constructor(object?: any) {
    if (typeof object === 'object') {
      for (const key of Object.keys(object)) {
        ;(this as any)[key] = (object as any)[key]
      }
    }
  }

  private transform(callback: (object: any) => any) {
    const scopedThis = this as any
    const instance: any = {}
    const properties = BaseJSON.getProperties(this.constructor.prototype)
    for (const key of properties) {
      try {
        if (Array.isArray(scopedThis[key])) {
          instance[key] = []
          for (const item of scopedThis[key]) {
            const val = callback(item)
            if (val !== undefined) {
              instance[key].push(val)
            }
          }
        } else if (scopedThis[key] !== undefined) {
          instance[key] = callback(scopedThis[key])
        }
      } catch (error: any) {
        console.error(`Error calling getter ${String(key)}`, error)
      }
    }
    return instance
  }

  toJSON() {
    function handleJSON(object: any) {
      return BaseJSON.isInstance(object) ? object.toJSON() : TBaseType.isInstance(object) ? object.id : object
    }
    return this.transform(handleJSON)
  }

  toValidation() {
    function handleValidation(object: any) {
      return BaseJSON.isInstance(object) ? object.toValidation() : false
    }
    return this.transform(handleValidation)
  }

  validate(...args: (string | symbol)[]) {
    function handleObject<T extends BaseJSON>(target: T, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const nullable =
          Reflect.getMetadata('property:nullable', target, property) ??
          Reflect.getMetadata('property:nullable', BaseJSON, property) ??
          false
        const runtime = Reflect.getMetadata('design:type', target, property)
        const isArray = Reflect.getMetadata('design:object:type', target, property) === 'array'
        const value = object[property]
        let result = (value !== undefined && value !== '' && value !== null) || nullable
        if (!result) {
          return false
        }
        if (isArray) {
          for (const item of value) {
            result =
              value === undefined || value === '' || value === null || typeof item === 'object'
                ? item instanceof runtime
                : typeof item === runtime.name.toLowerCase()
            if (!result) {
              return false
            }
          }
        } else {
          result =
            value === undefined ||
            value === '' ||
            value === null ||
            (typeof value === 'object' ? value instanceof runtime : typeof value === runtime.name.toLowerCase())
          if (!result) {
            return false
          }
        }
      }
      return true
    }
    const properties = BaseJSON.getProperties(this.constructor.prototype, args)
    return handleObject(this, properties, this)
  }

  //Mark: --static
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getProperties(prototype: any, args?: (string | symbol)[]) {
    const properties: (string | symbol)[] = []
    while (prototype != null) {
      let result: (string | symbol)[] = prototype['__properties__']
      if (result) {
        if (args && Array.isArray(args) && args.length > 0) {
          result = result.filter(property => args.includes(property))
        }
        properties.push(...result)
      }
      prototype = Object.getPrototypeOf(prototype)
    }
    return properties
  }
  static getParamNames(func: any) {
    const fnStr = func.toString().replace(STRIP_COMMENTS, '')
    let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
    if (result === null) result = []
    return result
  }

  static isInstance(object: any) {
    return object && object instanceof this
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static createInitObject(args: any) {
    const params = this.getParamNames((this as any).init)
    const object: any = {}
    for (let index = 0; index < params.length; index++) {
      object[params[index]] = args[index]
    }
    return this.fromObject(object)
  }

  static fromObject(object: any) {
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const runtime = Reflect.getMetadata('design:type', instance, property)
        const isArray = Reflect.getMetadata('design:object:type', instance, property) === 'array'
        if (runtime && isArray) {
          if (object[property]) {
            instance[property] = []
            for (const value of object[property]) {
              instance[property].push(runtime.fromObject(value))
            }
          } else if (undefined !== object[property]) {
            instance[property] = object[property]
          }
        } else if (undefined !== object[property]) {
          instance[property] = runtime
            ? BaseJSON.isInstance(new runtime())
              ? runtime.fromObject(object[property])
              : TBaseType.isInstance(new runtime()) && typeof object[property] === 'string'
              ? runtime.valueOf(object[property])
              : typeof object[property] !== 'object' && runtime.name.toLowerCase() !== typeof object[property]
              ? new runtime(object[property])
              : object[property]
            : object[property]
        }
      }
      return instance
    }
    if (!object || typeof object !== 'object') {
      return undefined
    }
    let instance = new (this as any)()
    const properties = BaseJSON.getProperties(instance.constructor.prototype)
    if (Array.isArray(object)) {
      const instanceArray = []
      for (const item of object) {
        instance = new (this as any)()
        instanceArray.push(handleObject(instance, properties, item))
      }
      return instanceArray
    }
    return handleObject(instance, properties, object)
  }

  static fillWith(value: any) {
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const runtime = Reflect.getMetadata('design:type', instance, property)
        const isArray = Reflect.getMetadata('design:object:type', instance, property) === 'array'
        if (isArray) {
          instance[property] = []
        } else {
          instance[property] =
            BaseJSON.isInstance(new runtime()) || BaseJSON.isInstance(new runtime.constructor())
              ? runtime.fillWith(value)
              : value
        }
      }
      return instance
    }
    let instance = new (this as any)()
    const properties = BaseJSON.getProperties(instance.constructor.prototype)
    if (Array.isArray(value)) {
      const instanceArray = []
      for (const item of value) {
        instance = new (this as any)()
        instanceArray.push(handleObject(instance, properties, item))
      }
      return instanceArray
    }
    return handleObject(instance, properties, value)
  }
}
