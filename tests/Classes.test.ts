import {
    expect
} from 'chai';
import * as Classes from '../src/Classes/index.js'
import * as Types from '../src/Types/index.js'

describe('test Classes', () => {
    const product = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(null)], [])
    it('product2 mast be iqual product', () => {
        const product2 = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(null)], [])
        expect(product.equal(product2)).to.be.true
    })
    it('product2 mast not be iqual product', async () => {
        const product2 = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(false)], [])
        expect(product.equal(product2)).to.be.false
    })
})

//TODO: impliment more tests