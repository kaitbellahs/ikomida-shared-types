type TTBaseType = typeof TBaseType;
export type Constructor<T extends TBaseType> = { new (): T };
export default abstract class TBaseType {
  //MARK: -- instance
  description?: string;
  name?: string;
  id: string;

  constructor(type: string) {
    this.id = type;
  }

  equalTo<T extends TBaseType>(object: T): boolean {
    return (
      object instanceof this.constructor &&
      object.id === this.id &&
      object.name === this.name &&
      object.description === this.description
    );
  }

  next() {
    const TOrderStatusList = (this.constructor as unknown as TTBaseType).values();
    return TOrderStatusList[TOrderStatusList.indexOf(this) + 1];
  }

  before() {
    const TOrderStatusList = (this.constructor as unknown as TTBaseType).values();
    return TOrderStatusList[TOrderStatusList.indexOf(this) - 1];
  }

  toString() {
    return this.constructor.name + '.' + this.id;
  }

  //MARK: -- static
  static isInstance(object: any) {
    return object && object instanceof this;
  }

  static valueOf<T extends TBaseType>(object?: string) {
    return object ? ((this as never)?.[object] as T) : null;
  }

  static *[Symbol.iterator]<T extends TBaseType>(this: Constructor<T>) {
    for (const key of (this as unknown as TTBaseType).keys()) {
      yield key as unknown as T;
    }
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
