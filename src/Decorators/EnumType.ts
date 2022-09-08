import 'reflect-metadata'
import TBaseType from '../Types/TBaseType'
export default function EnumType(target: any, key: string) {
    let _val = target[key];
    const getter = function () {
        return Reflect.getMetadata('design:type', target, key).valueOf(_val)
    };
    const setter = function (newVal: TBaseType) {
        _val = newVal.id;
    };
    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}