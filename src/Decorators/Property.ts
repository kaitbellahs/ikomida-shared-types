import 'reflect-metadata';

export function Property(dataType?: any): PropertyDecorator;
export function Property(target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor): void;

export function Property(...args: any[]): PropertyDecorator | void {
  if (args.length >= 2) {
    const target = args[0];
    const propertyName = args[1];
    const propertyDescriptor = args[2];

    annotateProperty(target, propertyName, propertyDescriptor);
    return;
  }

  return (target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor) => {
    let dataType = null;
    if (args.length === 1) {
      dataType = args[0];
      Reflect.defineMetadata('design:type', dataType, target, propertyName);
      Reflect.defineMetadata('design:object:type', 'array', target, propertyName);
    }
    annotateProperty(
      target,
      propertyName,
      propertyDescriptor ?? Object.getOwnPropertyDescriptor(target, propertyName),
      dataType,
    );
  };
}

function annotateProperty(
  target: any,
  propertyName: string | symbol,
  propertyDescriptor?: PropertyDescriptor,
  dataType?: any,
) {
  let props: (string | symbol)[];
  if (Object.prototype.hasOwnProperty.call(target, '__properties__')) {
    props = (target as any)['__properties__'];
  } else {
    props = (target as any)['__properties__'] = [];
  }
  props.push(propertyName);
}
