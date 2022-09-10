import 'reflect-metadata';
import TBaseType from '../Types/TBaseType';
type anotationFunction = (target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor) => void;

export function Enum(dataType?: any): anotationFunction;
export function Enum(
  target: any,
  propertyName: string,
  propertyDescriptor?: PropertyDescriptor): void;

export function Enum(...args: any[]): anotationFunction | void {
  if (args.length >= 2) {
    const target = args[0];
    const propertyName = args[1];
    const propertyDescriptor = args[2];

    annotate(target, propertyName, propertyDescriptor);
    return;
  }

  return (target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor) => {
    let dataType = null
    if (args.length === 1) {
      dataType = args[0]
      Reflect.defineMetadata('design:type:array', dataType, target, propertyName);
    }
    annotate(
      target,
      propertyName,
      propertyDescriptor ?? Object.getOwnPropertyDescriptor(target, propertyName),
      dataType
    );
  };
}
function annotate(
  target: any,
  propertyName: string,
  propertyDescriptor?: PropertyDescriptor,
  dataType?: any) {
  let runtime = Reflect.getMetadata('design:type', target, propertyName);
  if (dataType) {
    runtime = dataType;
  }
  type runtimeType = typeof runtime;
  let _val = target[propertyName];
  const getter = function () {
    if (_val) {
      if (Array.isArray(_val)) {
        const newVal: runtimeType[] = [];
        for (const val of _val) {
          newVal.push(typeof val !== 'object' ? runtime.valueOf(val) : val);
        }
        return newVal;
      } else {
        return typeof _val !== 'object' ? runtime.valueOf(_val) : _val;
      }
    } else {
      return typeof _val !== 'object' ? runtime.valueOf(_val) : _val;
    }
  };
  const setter = function (newVal?: runtimeType) {
    if (newVal) {
      if (Array.isArray(newVal)) {
        _val = [];
        for (const val of newVal as TBaseType[] | any[]) {
          _val.push(val && typeof val === 'object' && 'id' in (val as any) ? (val as any)?.id : val);
        }
      } else {
        _val = newVal && typeof newVal === 'object' && 'id' in (newVal as TBaseType) ? (newVal as TBaseType).id : newVal;
      }
    } else {
      _val = newVal;
    }
  };
  if (delete target[propertyName]) {
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}