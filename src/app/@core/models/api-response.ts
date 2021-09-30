export interface IApiResult<T> {
  status: string;
  msg: string;
  data: T;
}
