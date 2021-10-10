import { BaseService } from '@core/services/base.service';
import { IApiRes, IApiResult } from '@core/models/api-response';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getUserList(params?: IGetUserListReq) {
    const url = environment.apiUrl + '/user/list';
    return this.http.get<IUserListItem[]>(url, { params: { ...params }});
    // return of<IApiResult<IUserListItem[]>>({
    //   status: '1',
    //   msg: 'success',
    //   data: [
    //     {
    //       id: 1,
    //       name: '王大明',
    //       account: '1710932013',
    //       password: 1,
    //       department: '資工系',
    //       email: 'test@gmail.com',
    //     },
    //     {
    //       id: 2,
    //       name: '林小明',
    //       account: '1710932014',
    //       password: 1,
    //       department: '資管系',
    //       email: 'test@gmail.com',
    //     },        
    //     {
    //       id: 3,
    //       name: '蔡忠明',
    //       account: '1710932015',
    //       password: 1,
    //       department: '企管系',
    //       email: 'test@gmail.com',
    //     },
    //   ]
    // });
  }
  createUser(params: ICreateUserReq) {
    const url = environment.apiUrl + '/user/insert';
    return this.http.get<IApiRes & ICreateUserReq>(url, { params: { ...params }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
    // });
  }
  editUser(params: IEditUserReq) {
    const url = environment.apiUrl + '/user/update';
    return this.http.get<IApiRes & IUserListItem>(url, { params: { ...params }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
    // });
  }
  deleteUser(params: IDeleteUserReq) {
    const url = environment.apiUrl + '/user/delete';
    return this.http.get<IApiRes & IUserListItem>(url, { params: { ...params }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
    // });
  }
  getUserInfo(params: IGetUserInfoReq) {
    const url = environment.apiUrl + '/user/acc';
    return this.http.get<IApiRes & IUserListItem>(url, { params: { ...params }});
    // return of<IApiResult<IUserListItem>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {
    //     id: 1,
    //     name: '王大明',
    //     account: '1710932013',
    //     password: 1,
    //     department: '資工系',
    //     email: 'test@gmail.com',
    //   },
    // });
  }
}

interface IGetUserInfoReq {
  account: string;
}

interface IDeleteUserReq {
  id: string;
}

export interface ICreateUserReq {
  name: string;
  account: string;
  password: string;
  department: string;
  email: string;
}

export interface IEditUserReq extends ICreateUserReq {
  id: string;
}

interface IGetUserListReq {
  account?: string;
  name?: string;
}

export interface IUserListItem {
  id: number;
  name: string;
  account: string;
  password: number;
  department: string;
  email: string;
}
