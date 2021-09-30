import { BaseService } from '@core/services/base.service';
import { IApiResult } from '@core/models/api-response';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor() {
    super();
  }

  getUserList(params?: IGetUserListReq) {
    return of<IApiResult<IUserListItem[]>>({
      status: '1',
      msg: 'success',
      data: [
        {
          id: 1,
          name: '王大明',
          account: '1710932013',
          password: 1,
          department: '資工系',
          email: '2021-03-02',
        },
        {
          id: 2,
          name: '林小明',
          account: '1710932014',
          password: 1,
          department: '資管系',
          email: '2021-03-02',
        },        
        {
          id: 3,
          name: '蔡忠明',
          account: '1710932015',
          password: 1,
          department: '企管系',
          email: '2021-03-02',
        },
      ]
    });
  }
  createUser(params: ICreateUserReq) {
    return of<IApiResult<{}>>({
      status: '1',
      msg: 'success',
      data: {}
    });
  }
  editUser(params: IEditUserReq) {
    return of<IApiResult<{}>>({
      status: '1',
      msg: 'success',
      data: {}
    });
  }
  deleteUser(params: IDeleteUserReq) {
    return of<IApiResult<{}>>({
      status: '1',
      msg: 'success',
      data: {}
    });
  }
  getUserInfo(params: IGetUserInfoReq) {
    return of<IApiResult<IUserListItem>>({
      status: '1',
      msg: 'success',
      data: {
        id: 1,
        name: '王大明',
        account: '1710932013',
        password: 1,
        department: '資工系',
        email: '2021-03-02',
      },
    });
  }
}

interface IGetUserInfoReq {
  id: number;
}

interface IDeleteUserReq {
  id: number;
}

export interface ICreateUserReq {
  name: string;
  account: string;
  password: number;
  department: string;
  email: string;
}

export interface IEditUserReq extends ICreateUserReq {
  id: number;
}

interface IGetUserListReq {
  account?: string;
  name?: number;
}

export interface IUserListItem {
  id: number;
  name: string;
  account: string;
  password: number;
  department: string;
  email: string;
}
