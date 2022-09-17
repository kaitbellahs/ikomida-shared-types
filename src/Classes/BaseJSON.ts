import { Nullable } from '../Decorators';
import { Property } from '../Decorators/Property';
import { TBaseType } from '../Types';

const STRIP_COMMENTS =
  /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

export default abstract class BaseJSON {
  @Property
  @Nullable
  id?: string;
  @Property
  @Nullable
  timestamp?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getParamNames(func: any) {
    const fnStr = func.toString().replace(STRIP_COMMENTS, '');
    let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if (result === null) result = [];
    return result;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static createInitObject(args: any) {
    const params = this.getParamNames((this as any).init);
    const object: any = {};
    for (let index = 0; index < params.length; index++) {
      object[params[index]] = args[index];
    }
    return this.fromObject(object);
  }
  toJSON() {
    const scopedThis = this as any;
    const instance: any = {};
    const properties: (string | symbol)[] = [];
    let prototype = this.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype['__properties__'];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
    for (const key of properties) {
      try {
        const arrayOfObjects = Reflect.getMetadata('design:type:array', this, key) === 'array';
        if (Array.isArray(scopedThis[key])) {
          instance[key] = [];
          for (const item of scopedThis[key]) {
            let val = typeof item === 'object' && 'toJSON' in item ? item?.toJSON() ?? item : item;
            if (
              !arrayOfObjects &&
              item &&
              typeof item === 'object' &&
              (item instanceof TBaseType || new item.constructor() instanceof TBaseType) &&
              item?.id
            ) {
              val = item.id;
            }
            if (val !== undefined) {
              instance[key].push(val);
            }
          }
        } else if (!arrayOfObjects && scopedThis[key] && typeof scopedThis[key] === 'object' && scopedThis[key]?.id) {
          instance[key] = scopedThis[key].id;
        } else if (scopedThis[key] !== undefined && typeof scopedThis[key] === 'object') {
          instance[key] = scopedThis[key]?.toJSON() ?? scopedThis[key];
        } else if (scopedThis[key] !== undefined) {
          instance[key] = scopedThis[key];
        }
      } catch (error: any) {
        console.error(`Error calling getter ${String(key)}`, error);
      }
    }
    return instance;
  }

  validate() {
    function handleObject<T extends BaseJSON>(target: T, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const nullable =
          Reflect.getMetadata('property:nullable', target, property) ??
          Reflect.getMetadata('property:nullable', BaseJSON, property) ??
          false;
        const runtime = Reflect.getMetadata('design:type', target, property);
        const isArray = Reflect.getMetadata('design:object:type', target, property) === 'array';
        const value = object[property];
        let result = (value !== undefined && value !== '' && value !== null) || nullable;
        if (!result) {
          return false;
        }
        if (isArray) {
          for (const item of value) {
            result =
              value === undefined || value === '' || value === null || typeof item === 'object'
                ? item instanceof runtime
                : typeof item === runtime.name.toLowerCase();
            if (!result) {
              return false;
            }
          }
        } else {
          result =
            value === undefined ||
            value === '' ||
            value === null ||
            (typeof value === 'object' ? value instanceof runtime : typeof value === runtime.name.toLowerCase());
          if (!result) {
            return false;
          }
        }
      }
      return true;
    }
    if (!this || !(this instanceof this.constructor)) {
      return false;
    }
    const properties: (string | symbol)[] = [];
    let prototype = this.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype['__properties__'];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
    return handleObject(this, properties, this);
  }

  static fromObject(object: any) {
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        if (undefined !== object[property]) {
          instance[property] = object[property];
        }
      }
      return instance;
    }
    if (!object || typeof object !== 'object') {
      return null;
    }
    const properties: (string | symbol)[] = [];
    let instance = new (this as any)();
    let prototype = instance.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype['__properties__'];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
    if (Array.isArray(object)) {
      const instanceArray = [];
      for (const item of object) {
        instance = new (this as any)();
        instanceArray.push(handleObject(instance, properties, item));
      }
      return instanceArray;
    }
    return handleObject(instance, properties, object);
  }

  static fillWith(value: any) {
    function handleObject(instance: any, properties: (string | symbol)[], object: any) {
      for (const property of properties) {
        const runtime = Reflect.getMetadata('design:type', instance, property);
        const isArray = Reflect.getMetadata('design:object:type', instance, property) === 'array';
        if (isArray) {
          instance[property] = [];
        } else {
          instance[property] =
            new runtime() instanceof BaseJSON || new runtime.constructor() instanceof BaseJSON
              ? runtime.fillWith(value)
              : value;
        }
      }
      return instance;
    }
    const properties: (string | symbol)[] = [];
    let instance = new (this as any)();
    let prototype = instance.constructor.prototype;
    while (prototype != null) {
      const result: (string | symbol)[] = prototype['__properties__'];
      if (result) {
        properties.push(...result);
      }
      prototype = Object.getPrototypeOf(prototype);
    }
    if (Array.isArray(value)) {
      const instanceArray = [];
      for (const item of value) {
        instance = new (this as any)();
        instanceArray.push(handleObject(instance, properties, item));
      }
      return instanceArray;
    }
    return handleObject(instance, properties, value);
  }

  constructor(object?: any) {
    if (typeof object === 'object') {
      for (const key of Object.keys(object)) {
        (this as any)[key] = (object as any)[key];
      }
    }
  }
}
