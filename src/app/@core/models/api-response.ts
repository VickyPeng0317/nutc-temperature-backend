export interface IApiResult<T> {
  status: string;
  msg: string;
  data: T;
}

export interface IApiRes {
  code: string;
  msg: string;
}

export interface IPageReq {
  perPage: number;
  currentPage: number;
}

export interface IPageRes<T> {
  data: T;
  pageParams: IPageParams;
}

export interface IPageParams {
  perPage: number;
  currentPage: number;
  total: number;
}