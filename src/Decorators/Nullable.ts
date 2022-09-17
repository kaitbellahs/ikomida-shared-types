export default function Nullable(target: any, propertyName: string | symbol, propertyDescriptor?: PropertyDescriptor) {
  Reflect.defineMetadata('property:nullable', true, target, propertyName);
}
