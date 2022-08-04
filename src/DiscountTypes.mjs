export default class DiscountTypes {
    static PERCENT = 'PERCENT';
    static VALUE = 'VALUE';
    static NO = 'NO';

    static keys = Object.keys(DiscountTypes)
    static list = DiscountTypes.keys.map((discountType) => {
        return {
            id: discountType,
            name: DiscountTypes[discountType]
        };
    })
}