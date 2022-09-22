import 'reflect-metadata';
import TBaseType from '../Types/TBaseType';
type anotationFunction = (target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor) => void;

export function Enum(dataType?: any): anotationFunction;
export function Enum(target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor): void;

export function Enum(...args: any[]): anotationFunction | void {
  if (args.length >= 2) {
    const target = args[0];
    const propertyName = args[1];
    const propertyDescriptor = args[2];

    annotateEnum(target, propertyName, propertyDescriptor);
    return;
  }

  return (target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor) => {
    let dataType = null;
    if (args.length === 1) {
      dataType = args[0];
      Reflect.defineMetadata('design:type', dataType, target, propertyName);
      Reflect.defineMetadata('design:object:type', 'array', target, propertyName);
    }
    annotateEnum(
      target,
      propertyName,
      propertyDescriptor ?? Object.getOwnPropertyDescriptor(target, propertyName),
      dataType,
    );
  };
}

function annotateEnum(
  target: any,
  propertyName: string | symbol,
  propertyDescriptor?: PropertyDescriptor,
  dataType?: any,
) {
  let runtime = Reflect.getMetadata('design:type', target, propertyName);
  if (dataType) {
    runtime = dataType;
  }
  type runtimeType = typeof runtime;
  const key =
    typeof propertyName === 'symbol'
      ? Symbol(`_${propertyName.toString().substring(7, propertyName.toString().length - 1)}`)
      : `_${propertyName}`;
  const getter = function (this: {
    set: (newVal?: any) => void;
    get: () => any;
    enumerable: boolean;
    configurable: boolean;
  }) {
    const propertyValue = (this as any)[key];
    let newVal;
    if (Array.isArray(propertyValue)) {
      newVal = [];
      for (const val of propertyValue) {
        newVal.push(typeof val === 'string' ? runtime.valueOf(val.toUpperCase()) : val);
      }
    } else if (typeof propertyValue === 'string') {
      newVal = runtime.valueOf(propertyValue.toUpperCase());
    } else {
      newVal = propertyValue;
    }
    return newVal;
  };
  const setter = function (
    this: {
      get: (this: { set: (newVal?: any) => void; get: () => any; enumerable: boolean; configurable: boolean }) => any;
      set: (newVal?: any) => void;
      enumerable: true;
      configurable: true;
    },
    newVal?: runtimeType,
  ) {
    let _val = newVal;
    if (newVal) {
      if (Array.isArray(newVal)) {
        _val = [];
        for (const val of newVal as TBaseType[] | any[]) {
          _val.push(val && typeof val === 'object' && 'id' in (val as any) ? (val as any)?.id : val);
        }
      } else {
        _val =
          newVal && typeof newVal === 'object' && 'id' in (newVal as TBaseType) ? (newVal as TBaseType).id : newVal;
      }
    } else {
      _val = newVal;
    }
    (this as any)[key] = _val;
  };
  delete target[propertyName];
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
