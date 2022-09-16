import 'reflect-metadata';
import { BaseJSON } from '../Interfaces';
type anotationFunction = (target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor) => void;

export function FromJSON(dataType?: any): anotationFunction;
export function FromJSON(target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor): void;

export function FromJSON(...args: any[]): anotationFunction | void {
  if (args.length >= 2) {
    const target = args[0];
    const propertyName = args[1];
    const propertyDescriptor = args[2];

    annotateFromJSON(target, propertyName, propertyDescriptor);
    return;
  }

  return (target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor) => {
    let dataType = null;
    if (args.length === 1) {
      dataType = args[0];
      Reflect.defineMetadata('design:type:array', dataType, target, propertyName);
    }
    annotateFromJSON(
      target,
      propertyName,
      propertyDescriptor ?? Object.getOwnPropertyDescriptor(target, propertyName),
      dataType,
    );
  };
}

function annotateFromJSON(target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor, dataType?: any) {
  let runtime = Reflect.getMetadata('design:type', target, propertyName);
  if (dataType) {
    runtime = dataType;
  }
  type runtimeType = typeof runtime;
  let _val = target[propertyName];
  const getter = function () {
    return _val
  };
  const setter = function (newVal?: runtimeType) {
    if (Array.isArray(newVal)) {
      _val = [];
      for (const val of newVal as any[]) {
        _val.push(val && typeof val === 'object' ? runtime.fromObject(val) : val);
      }
    } else {
      _val = runtime.fromObject(newVal);
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
