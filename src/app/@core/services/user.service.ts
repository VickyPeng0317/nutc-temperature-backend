import { BaseService } from '@core/services/base.service';
import { IPageReq, IPageRes } from '@core/models/api-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAction, Post } from '@core/decorators/api-decorator';
import { GetUserListMock, LoginMock } from '@core/mocks/user-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(
    private http: HttpClient
  ) {
    super();
  }
  @Post({
    path: '/user/list',
    mockData: GetUserListMock
  })
  getUserList: ApiAction<IGetUserListReq, IPageRes<IUserListItem[]>>;

  @Post({
    path: '/user/info',
    mockData: GetUserListMock
  })
  getUserInfo: ApiAction<IGetUserInfoReq, IUserListItem>;

  @Post({
    path: '/user/login',
    mockData: LoginMock
  })
  login: ApiAction<ILoginReq, ILoginRes>;
}

interface ILoginReq {
  userAccount: string;
  password: string;
}

interface ILoginRes {
  isSuccess: boolean;
  data: IUserListItem;
}

interface IGetUserInfoReq {
  userAccount: string;
}

interface IGetUserListReq extends IPageReq{
  userAccount?: string;
  userName?: string;
}

export interface IUserListItem {
  userAccount: string;
  userName: string;
  collegeName: number;
  departmentName: string;
  departmentSubName: string;
  identity: string;
}
