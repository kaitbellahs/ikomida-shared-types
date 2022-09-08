import TBaseType from "./TBaseType"

export default class TPerson extends TBaseType {
    static FISICA = new TPerson('FISICA')
    static JURIDICA = new TPerson('JURIDICA')

    constructor(type: string) {
        super(type)
        switch (type) {
            case 'FISICA':
                this.name = 'Pessoa Física'
                this.description = 'Pessoa Física'
                break
            case 'JURIDICA':
                this.name = 'Pessoa Jurídica'
                this.description = 'Pessoa Jurídica'
                break
            default:
                this.name = '-'
                this.description = '-'
                break
        }
    }
}