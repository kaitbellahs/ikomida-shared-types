export interface IErrorModel {
  code: string;
  message: string;
}
export default interface IError {
  code?: string;
  message: string;
  errors?: string;
}
