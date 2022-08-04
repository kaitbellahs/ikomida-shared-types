export default class TermTypes {
    static TermOfUseVendor = 'Termo de uso estabelecimentos';
    static TermOfUseVendorStaff = 'Termo de uso funcionarios dos estabelecimentos';
    static TermOfUseReseller = 'Termo de uso vendedores';
    static TermOfUseClient = 'Termo de uso usuarios';
    static PrivacyPolicy = 'Politica de privacidade';

    static keys = Object.keys(TermTypes);
    static list = TermTypes.keys.map((termType) => {
        return {
            id: termType,
            name: TermTypes[termType]
        };
    });
}