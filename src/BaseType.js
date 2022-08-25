export default class BaseType {
    description
    name
    id
    constructor(type) {
        this.id = type
    }
    static keys = Object.keys(BaseType)
    static list = BaseType.keys.map((item) => {
        return {
            id: item,
            name: new BaseType(item)?.name
        };
    })
}