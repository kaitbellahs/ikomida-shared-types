import IBusinessTimeHours from './IBusinessTimeHours';


export default interface IBusinessTime {
    days: number[];
    hours: IBusinessTimeHours[];
}
