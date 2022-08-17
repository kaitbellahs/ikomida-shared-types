export default class TermTypes {
    description
    name
    constructor(type) {
        this.name = type
        switch (type) {
            case TermTypes.TERM_OF_USE_VENDOR:
                this.description = 'Termo de uso estabelecimentos'
                break
            case TermTypes.TERM_OF_USE_STAFF:
                this.description = 'Termo de uso funcionarios dos estabelecimentos'
                break
            case TermTypes.TERM_OF_USE_RESELLER:
                this.description = 'Termo de uso vendedores';
                break
            case TermTypes.TERM_OF_USE_CLIENT:
                this.description = 'Termo de uso usuarios';
                break
            case TermTypes.PRIVACY_POLICY:
                this.description = 'Politica de privacidade'
                break
            default:
                this.description = '-'
                break
        }
    }

    static TERM_OF_USE_VENDOR = 'TERM_OF_USE_VENDOR';
    static TERM_OF_USE_STAFF = 'TERM_OF_USE_STAFF';
    static TERM_OF_USE_RESELLER = 'TERM_OF_USE_RESELLER';
    static TERM_OF_USE_CLIENT = 'TERM_OF_USE_CLIENT';
    static PRIVACY_POLICY = 'PRIVACY_POLICY';

    static keys = Object.keys(TermTypes);
    static list = TermTypes.keys.map((item) => {
        return {
            id: item,
            name: new TermTypes(item).name
        };
    });
}