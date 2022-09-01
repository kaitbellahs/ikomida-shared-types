export default abstract class BaseType {
  description?: string;
  name?: string;
  id: string;
  constructor(type: string) {
    this.id = type;
  }
  keys = Object.keys(this.constructor);
  get list() {
    return this.keys.map((item) => {
      const instance: BaseType = new (this.constructor as new (...args: any[]) => any)(item);
      return {
        id: item,
        name: instance.name,
      };
    });
  }
}
