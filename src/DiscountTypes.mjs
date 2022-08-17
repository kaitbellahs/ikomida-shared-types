export default class DiscountTypes {
    description
    name
    id
    constructor(type) {
        this.id = type
        switch (type) {
            case DiscountTypes.PERCENT:
                this.name = 'porcentagem'
                this.description = 'descontar um porcentagem'
                break
            case DiscountTypes.VALUE:
                this.name = 'valor'
                this.description = 'descontar um valor'
                break
            case DiscountTypes.NO:
                this.name = 'sem descontar';
                this.description = 'sem nenhum desconto';
                break
            default:
                this.name = '-'
                this.description = '-'
                break
        }
    }
    static PERCENT = 'PERCENT';
    static VALUE = 'VALUE';
    static NO = 'NO';

    static keys = Object.keys(DiscountTypes)
    static list = DiscountTypes.keys.map((item) => {
        return {
            id: item,
            name: DiscountTypes(item)?.name
        };
    })
}