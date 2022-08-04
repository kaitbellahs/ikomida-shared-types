export default class DiscountTypes {
    static PERCENT = 'percent';
    static VALUE = 'value';
    static NO = 'no discount';

    static keys = Object.keys(DiscountTypes)
    static list = DiscountTypes.keys.map((discountType) => {
        return {
            id: discountType,
            name: DiscountTypes[discountType]
        };
    })
}