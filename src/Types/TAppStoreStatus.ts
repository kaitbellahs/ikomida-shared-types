import TBaseType from "./TBaseType"

export default class TAppStoreStatus extends TBaseType {

    static PENDING = new TAppStoreStatus('PENDING')
    static DOING = new TAppStoreStatus('DOING')
    static IN_REVIEW = new TAppStoreStatus('IN_REVIEW')
    static ATTENTION = new TAppStoreStatus('ATTENTION')
    static REJECTED = new TAppStoreStatus('REJECTED')
    static CANCELED = new TAppStoreStatus('CANCELED')
    static DONE = new TAppStoreStatus('DONE')

    constructor(type: string) {
        super(type)
        switch (type) {
            case 'PENDING':
                this.name = 'esperando'
                this.description = 'esperando atuação'
                break
            case 'DOING':
                this.name = 'em andamento'
                this.description = 'em andamento'
                break
            case 'IN_REVIEW':
                this.name = 'em revisão'
                this.description = 'em revisão'
                break
            case 'ATTENTION':
                this.name = 'precisando de atenção'
                this.description = 'precisando de atenção'
                break
            case 'REJECTED':
                this.name = 'rejeitado'
                this.description = 'rejeitado'
                break
            case 'CANCELED':
                this.name = 'cancelado'
                this.description = 'cancelado'
                break
            case 'DONE':
                this.name = 'feito'
                this.description = 'feito'
                break
            default:
                this.name = '-'
                this.description = '-'
                break
        }
    }
}
