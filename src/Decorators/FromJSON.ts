import 'reflect-metadata'
import { BaseJSON } from '../Classes/index.js'
import { TBaseType } from '../Types/index.js'

export function FromJSON(dataType?: any): PropertyDecorator
export function FromJSON(target: any, propertyName: string, propertyDescriptor?: PropertyDescriptor): void

export function FromJSON(...args: any[]): PropertyDecorator | void {
  if (args.length >= 2) {
    const target = args[0]
    const propertyName = args[1]
    const propertyDescriptor = args[2]

    annotateFromJSON(target, propertyName, propertyDescriptor)
    return
  }

  return (target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor) => {
    let dataType = null
    if (args.length === 1) {
      dataType = args[0]
      Reflect.defineMetadata('design:type', dataType, target, propertyName)
      Reflect.defineMetadata('design:object:type', 'array', target, propertyName)
    }
    annotateFromJSON(
      target,
      propertyName,
      propertyDescriptor ?? Object.getOwnPropertyDescriptor(target, propertyName),
      dataType
    )
  }
}

function annotateFromJSON(
  target: any,
  propertyName: string | symbol,
  propertyDescriptor?: PropertyDescriptor,
  dataType?: any
) {
  let runtime = Reflect.getMetadata('design:type', target, propertyName)
  if (dataType) {
    runtime = dataType
  }
  type runtimeType = typeof runtime
  const key =
    typeof propertyName === 'symbol'
      ? Symbol(`_${propertyName.toString().substring(7, propertyName.toString().length - 1)}`)
      : `_${propertyName}`
  const getter = function (this: {
    set: (newVal?: any) => void
    get: () => any
    enumerable: boolean
    configurable: boolean
  }) {
    return (this as any)[key]
  }
  const setter = function (
    this: {
      get: (this: { set: (newVal?: any) => void; get: () => any; enumerable: boolean; configurable: boolean }) => any
      set: (newVal?: any) => void
      enumerable: true
      configurable: true
    },
    newVal?: runtimeType
  ) {
    let _val = newVal
    if (Array.isArray(newVal)) {
      const value = []
      for (const val of newVal) {
        value.push(
          val && BaseJSON.isInstance(new runtime())
            ? runtime?.fromObject(val)
            : !TBaseType.isInstance(new runtime()) || typeof val === 'string'
              ? new runtime(val)
              : val
        )
      }
      _val = value
    } else {
      _val = BaseJSON.isInstance(new runtime())
        ? runtime?.fromObject(newVal)
        : !TBaseType.isInstance(new runtime()) || typeof newVal === 'string'
          ? new runtime(newVal)
          : newVal
    }
    ; (this as any)[key] = _val
  }
  delete target[propertyName]
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}
