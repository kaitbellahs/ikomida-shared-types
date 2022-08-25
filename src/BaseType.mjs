export default class BaseType {
    description
    name
    id
    constructor(type) {
        this.id = type
    }
    keys = Object.keys(this.constructor)
    get list() {
        return this.keys.map((item) => {
            return {
                id: item,
                name: new this.constructor(item).name
            };
        })
    }
}