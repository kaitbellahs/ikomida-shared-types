export default class SupportTypes {
    static EMAIL = 'Email';
    static WHATSAPP = 'Whatsapp';
    static CALL = 'Ligação';
    static CHAT = 'Bate papo';

    static keys = Object.keys(SupportTypes)
    static list = SupportTypes.keys.map((supportType) => {
        return {
            id: supportType,
            name: SupportTypes[supportType]
        };
    })
}