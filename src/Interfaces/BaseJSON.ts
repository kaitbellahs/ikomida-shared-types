export default abstract class BaseJSON {
    toJSON?() {
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = Object.assign({}, this);

        Object.entries(Object.getOwnPropertyDescriptors(proto))
            .filter(([key, descriptor]) => typeof descriptor.get === 'function')
            .map(([key, descriptor]) => {
                const c = Reflect.getMetadata('design:type', this, key)
                try {
                    const val = (this as any)[key];
                    jsonObj[key] = val.id;
                } catch (error) {
                    console.error(`Error calling getter ${key}`, error);
                }
            });
        return jsonObj;
    }
}