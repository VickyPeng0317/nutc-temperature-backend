export interface IApiResult<T> {
  status: string;
  msg: string;
  data: T;
}

export interface IApiRes {
  code: string;
  msg: string;
}

