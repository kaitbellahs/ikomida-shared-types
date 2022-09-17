import { Property } from "../Decorators/Property";

const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;

export default abstract class BaseJSON {
  @Property
  id?: string;
  @Property
  timestamp?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getParamNames(func: any) {
    const fnStr = func.toString().replace(STRIP_COMMENTS, '');
    let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if (result === null)
      result = [];
    return result;
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
  toJSON() {
    const scopedThis = this as any
    const instance: any = {}
    const properties: (string | symbol)[] = [];
    let prototype = this.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype["__properties__"];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
    for (const key of properties) {
      try {
        const arrayOfObjects = Reflect.getMetadata('design:type:array', this, key) === 'arrayOfObjects';
        if (Array.isArray(scopedThis[key])) {
          instance[key] = [];
          for (const item of scopedThis[key]) {
            let val = item?.toJSON() ?? item;
            if (!arrayOfObjects && item && typeof item === 'object' && item?.id) {
              val = item.id;
            }
            if (val !== undefined) {
              instance[key].push(val);
            }
          }
        }
        else if (!arrayOfObjects && scopedThis[key] && typeof scopedThis[key] === 'object' && scopedThis[key]?.id) {
          instance[key] = scopedThis[key].id;
        }
        else if (scopedThis[key] !== undefined && typeof scopedThis[key] === 'object') {
          instance[key] = scopedThis[key]?.toJSON() ?? scopedThis[key];
        }
        else if (scopedThis[key] !== undefined) {
          instance[key] = scopedThis[key];
        }
      } catch (error: any) {
        console.error(`Error calling getter ${String(key)}`, error);
      }
    }
    return instance;
  }

  static fromObject(object: any) {
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        if (undefined !== object[property]) {
          instance[property] = object[property]
        }
      }
      return instance
    }
    if (!object && typeof object !== 'object') {
      return null
    }
    const properties: (string | symbol)[] = [];
    let instance = new (this as any)()
    let prototype = instance.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype["__properties__"];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
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

  constructor(object?: any) {
    if (typeof object === 'object') {
      for (const key of Object.keys(object)) {
        (this as any)[key] = (object as any)[key];
      }
    }
  }
}
