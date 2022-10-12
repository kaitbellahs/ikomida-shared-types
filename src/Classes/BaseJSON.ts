import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import { TBaseType } from '../Types/index.js'

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
        ; (this as any)[key] = (object as any)[key]
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

  equal<T extends BaseJSON>(input: T) {
    try {
      const object: any = input
      const properties = BaseJSON.getProperties(this.constructor.prototype)
      const scopedThis = this as any
      for (const key of properties) {
        if (
          Array.isArray(scopedThis[key]) &&
          Array.isArray(object[key]) &&
          scopedThis[key].length === object[key].length
        ) {
          for (const index in scopedThis[key]) {
            const item = scopedThis[key][index]
            const objectItem = object?.[key]?.[index]
            if (!objectItem) {
              return false
            }
            if (BaseJSON.isInstance(item) || BaseJSON.isInstance(objectItem)) {
              if (!item.equal(objectItem)) {
                return false
              }
            } else if (item instanceof Date || objectItem instanceof Date) {
              if (item.getTime() !== objectItem.getTime()) {
                return false
              }
            } else if (item !== objectItem) {
              return false
            }
          }
        } else if (BaseJSON.isInstance(scopedThis[key]) || BaseJSON.isInstance(object[key])) {
          if (!scopedThis[key].equal(object[key])) {
            return false
          }
        } else if (scopedThis[key] instanceof Date || object[key] instanceof Date) {
          if (scopedThis[key].getTime() !== object[key].getTime()) {
            return false
          }
        } else if (scopedThis[key] !== object[key]) {
          return false
        }
      }
    } catch (error: any) {
      //TODO: --report errors
      return false
    }
    return true
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
        if (isArray && value) {
          for (const item of value) {
            result = !runtime || !item || item instanceof runtime || typeof item === runtime.name.toLowerCase()
            if (!result) {
              return false
            }
          }
        } else {
          result = !runtime || !value || value instanceof runtime || typeof value === runtime.name.toLowerCase()
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
  // static getParamNames(func: any) {
  //   const fnStr = func.toString().replace(STRIP_COMMENTS, '')
  //   let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
  //   if (result === null) result = []
  //   return result
  // }

  static isInstance(object: any) {
    return object && object instanceof this
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static createInitObject(args: any, names: string[]) {
    //TODO: -- automate args names
    // const params = this.getParamNames((this as any).init)
    const object: any = {}
    for (let index = 0; index < names.length; index++) {
      object[names[index]] = args[index]
    }
    return this.fromObject(object)
  }

  static fromObject(object: any) {
    function transformObject(object: any, runtime: any) {
      if (undefined !== object) {
        return BaseJSON.isInstance(new runtime())
          ? runtime && runtime.fromObject(object)
          : runtime && TBaseType.isInstance(new runtime()) && typeof object === 'string'
            ? runtime.valueOf(object)
            : runtime && typeof object !== 'object' && runtime.name.toLowerCase() !== typeof object
              ? new runtime(object)
              : object
      }
      return undefined
    }
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const runtime = Reflect.getMetadata('design:type', instance, property)
        const isArray = Reflect.getMetadata('design:object:type', instance, property) === 'array'
        if (runtime && isArray) {
          if (object[property]) {
            instance[property] = []
            for (const value of object[property]) {
              const _value = transformObject(value, runtime)
              if (undefined !== _value) {
                instance[property].push(_value)
              }
            }
          } else if (undefined !== object[property]) {
            instance[property] = object[property]
          }
        } else if (undefined !== object[property]) {
          instance[property] = transformObject(object[property], runtime)
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
            runtime && (BaseJSON.isInstance(new runtime()) || BaseJSON.isInstance(new runtime.constructor()))
              ? runtime && runtime.fillWith(value)
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
