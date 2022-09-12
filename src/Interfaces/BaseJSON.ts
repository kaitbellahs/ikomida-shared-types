export default abstract class BaseJSON {
  id?: string;
  timestamp?: number;

  toJSON() {
    const prototype = Object.getPrototypeOf(this);
    const json: any = Object.assign({}, this);

    Object.entries(Object.getOwnPropertyDescriptors(prototype))
      .filter((proto) => typeof proto?.[1].get === 'function')
      .map((proto) => {
        const key = proto?.[0];
        try {
          if (Array.isArray((this as any)[key])) {
            json[key] = [];
            for (const item of (this as any)[key]) {
              let val = (this as any)[key];
              if (typeof item === 'object' && 'id' in item) {
                val = item.id;
              }
              json[key].push(val);
            }
          } else if (typeof (this as any)[key] === 'object' && 'id' in (this as any)[key]) {
            json[key] = (this as any)[key].id;
          } else {
            json[key] = (this as any)[key];
          }
        } catch (error: any) {
          console.error(`Error calling getter ${key}`, error);
        }
      });
    return json;
  }

  constructor(object?: any) {
    if (typeof object === 'object')
      for (const key of Object.keys(object)) {
        (this as any)[key] = (object as any)[key];
      }
  }
}
