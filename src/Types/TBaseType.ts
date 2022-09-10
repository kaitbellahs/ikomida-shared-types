type TTBaseType = typeof TBaseType;
export type Constructor<T extends TBaseType> = { new(): T };
export default abstract class TBaseType {
  description?: string;
  name?: string;
  id: string;
  constructor(type: string) {
    this.id = type;
  }

  static valueOf<T extends TBaseType>(object?: string) {
    return object ? ((this as never)?.[object] as T) : null;
  }

  static *[Symbol.iterator]<T extends TBaseType>(this: Constructor<T>) {
    for (const key of (this as unknown as TTBaseType).keys()) {
      yield key as unknown as T;
    }
  }

  toString() {
    return this.constructor.name + '.' + this.id;
  }

  static keys() {
    return Object.keys(this);
  }
  static values() {
    return Object.values(this);
  }
  static list<T extends TBaseType>() {
    const keys = (this as unknown as TTBaseType).keys();
    return keys.map((item: string) => {
      return {
        name: item,
        value: (this as never)[item] as T,
      };
    });
  }
}
