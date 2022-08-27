import BaseType from './BaseType.mjs'
export default class UserBankAccountStatus extends BaseType {

    constructor(type) {
        super(type)
        switch (type) {
            case UserBankAccountStatus.PENDING:
                this.name = 'aguardando';
                this.description = 'aguardando analise';
                break
            case UserBankAccountStatus.ANALISE:
                this.name = 'em analise';
                this.description = 'em analise';
                break
            case UserBankAccountStatus.APROVED:
                this.name = 'aprovado';
                this.description = 'aprovado';
                break
            case UserBankAccountStatus.REJECTED:
                this.name = 'rejeitado';
                this.description = 'rejeitado';
                break
            default:
                this.name = '-'
                this.description = '-'
                break
        }
    }

    static PENDING = 'PENDING';
    static ANALISE = 'ANALISE';
    static APROVED = 'APROVED';
    static REJECTED = 'REJECTED';

}