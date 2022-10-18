import { describe, expect, test } from '@jest/globals';
import * as Classes from '../src/Classes/index'
import * as Types from '../src/Types/index'

describe('test Classes', () => {
    const product = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, Types.TMeasure.CENTIMETER, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(null)], [])
    test('product2 mast be iqual product', () => {
        const product2 = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, Types.TMeasure.CENTIMETER, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(null)], [])
        expect(product.equal(product2)).toBeTruthy
    })
    test('product2 mast not be iqual product', async () => {
        const product2 = Classes.CProduct.init('product', 100, 1, Types.TDiscount.NO, 1, undefined, undefined, undefined, undefined, Types.TMeasure.CENTIMETER, undefined, undefined, [Classes.CProductOptionsCategory.fillWith(false)], [])
        expect(product.equal(product2)).toBeFalsy
    })
})
describe('test Classes 2', () => {
    const obj1 = Classes.CProduct.fromObject({
        "options": [
            {
                "maxUnits": 2,
                "name": "catchup",
                "highlighted": false,
                "price": 0,
                "units": 1,
                "order": 2,
                "image": null,
                "id": "96e673a6-8e65-4193-910f-80e92c26e2cf"
            }
        ],
        "leftQuantity": 121,
        "title": "test",
        "price": 1120,
        "discount": 1000,
        "discountType": "PERCENT",
        "quantity": 4,
        "description": "test 2",
        "order": 3,
        "serves": 2,
        "measure": 105,
        "measureUnit": "CENTIMETER",
        "category": {
            "title": "Frutas",
            "id": "9fe6da85-3df5-41d4-9787-351d1278055b"
        },
        "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/product/f368a26b-457e-447d-ba94-dd9ff4f20a6e/0.jpg",
        "optionsCategories": [
            {
                "name": "molhos",
                "highlighted": false,
                "min": 1,
                "max": 2,
                "order": 1,
                "options": [
                    {
                        "name": "tare",
                        "highlighted": false,
                        "price": 0,
                        "units": 3,
                        "order": 0,
                        "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/a767ed24-708c-402b-8509-40c10568abf7/0.jpg",
                        "id": "693d5974-0833-4de9-9819-d7dc7054ed94"
                    },
                    {
                        "name": "catchup",
                        "highlighted": false,
                        "price": 0,
                        "units": 2,
                        "order": 2,
                        "image": null,
                        "id": "96e673a6-8e65-4193-910f-80e92c26e2cf"
                    },
                    {
                        "name": "maiones de casa",
                        "highlighted": false,
                        "price": 0,
                        "units": 1,
                        "order": 1,
                        "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/511d3149-44bd-47a8-aaec-e740651d043c/0.jpg",
                        "id": "c74b4def-4a86-459d-9451-a1a1aba70193"
                    }
                ],
                "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/productOptionsCategory/84e295e4-409f-491a-870b-c8e8f6672bca/0.jpg",
                "id": "fe1a9c83-4f11-4ee9-95be-6529bc055519"
            },
            {
                "name": "Refrigerante",
                "highlighted": false,
                "min": 0,
                "max": 1,
                "order": 0,
                "options": [
                    {
                        "name": "coca cola 350ml",
                        "highlighted": false,
                        "price": 500,
                        "units": 1,
                        "order": 0,
                        "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/6b8e68be-d2ac-4c44-a227-e2c95884dd27/0.jpg",
                        "id": "bc277592-64b8-4e57-9e88-cf469571dedd"
                    },
                    {
                        "name": "soco de laranja",
                        "highlighted": false,
                        "price": 0,
                        "units": 1,
                        "order": 1,
                        "image": null,
                        "id": "c48e2175-2ad5-4925-8426-a69648eccfb4"
                    }
                ],
                "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/productOptionsCategory/9ba7f4db-0c73-4034-9c35-b9561987730d/0.jpg",
                "id": "0039873c-76ed-42c3-8c84-257008d28e9e"
            }
        ],
        "createdAt": "2022-10-06T05:02:21.000Z",
        "id": "bd7661ab-696e-4089-b7e1-e69a61c6496a"
    })
    test('product2 mast be iqual product', () => {
        const obj2 = Classes.CProduct.fromObject({
            "options": [
                {
                    "maxUnits": 2,
                    "name": "catchup",
                    "highlighted": false,
                    "price": 0,
                    "units": 1,
                    "order": 2,
                    "image": null,
                    "id": "96e673a6-8e65-4193-910f-80e92c26e2cf"
                }
            ],
            "leftQuantity": 121,
            "title": "test",
            "price": 1120,
            "discount": 1000,
            "discountType": "PERCENT",
            "quantity": 4,
            "description": "test 2",
            "order": 3,
            "serves": 2,
            "measure": 105,
            "measureUnit": "CENTIMETER",
            "category": {
                "title": "Frutas",
                "id": "9fe6da85-3df5-41d4-9787-351d1278055b"
            },
            "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/product/f368a26b-457e-447d-ba94-dd9ff4f20a6e/0.jpg",
            "optionsCategories": [
                {
                    "name": "molhos",
                    "highlighted": false,
                    "min": 1,
                    "max": 2,
                    "order": 1,
                    "options": [
                        {
                            "name": "tare",
                            "highlighted": false,
                            "price": 0,
                            "units": 3,
                            "order": 0,
                            "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/a767ed24-708c-402b-8509-40c10568abf7/0.jpg",
                            "id": "693d5974-0833-4de9-9819-d7dc7054ed94"
                        },
                        {
                            "name": "catchup",
                            "highlighted": false,
                            "price": 0,
                            "units": 2,
                            "order": 2,
                            "image": null,
                            "id": "96e673a6-8e65-4193-910f-80e92c26e2cf"
                        },
                        {
                            "name": "maiones de casa",
                            "highlighted": false,
                            "price": 0,
                            "units": 1,
                            "order": 1,
                            "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/511d3149-44bd-47a8-aaec-e740651d043c/0.jpg",
                            "id": "c74b4def-4a86-459d-9451-a1a1aba70193"
                        }
                    ],
                    "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/productOptionsCategory/84e295e4-409f-491a-870b-c8e8f6672bca/0.jpg",
                    "id": "fe1a9c83-4f11-4ee9-95be-6529bc055519"
                },
                {
                    "name": "Refrigerante",
                    "highlighted": false,
                    "min": 0,
                    "max": 1,
                    "order": 0,
                    "options": [
                        {
                            "name": "coca cola 350ml",
                            "highlighted": false,
                            "price": 500,
                            "units": 1,
                            "order": 0,
                            "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/optionsCategory/6b8e68be-d2ac-4c44-a227-e2c95884dd27/0.jpg",
                            "id": "bc277592-64b8-4e57-9e88-cf469571dedd"
                        },
                        {
                            "name": "soco de laranja",
                            "highlighted": false,
                            "price": 0,
                            "units": 1,
                            "order": 1,
                            "image": null,
                            "id": "c48e2175-2ad5-4925-8426-a69648eccfb4"
                        }
                    ],
                    "image": "https://storage.googleapis.com/dev.cdn.ikomida.com/com.ikomida.br.tialtonivel/productOptionsCategory/9ba7f4db-0c73-4034-9c35-b9561987730d/0.jpg",
                    "id": "0039873c-76ed-42c3-8c84-257008d28e9e"
                }
            ],
            "createdAt": "2022-10-06T05:02:21.000Z",
            "id": "bd7661ab-696e-4089-b7e1-e69a61c6496a"
        })
        expect(obj1.equal(obj2)).toBeTruthy
    })
})

//TODO: impliment more tests