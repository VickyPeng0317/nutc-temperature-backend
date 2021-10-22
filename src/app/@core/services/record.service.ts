import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '@environments/environment';
import { ApiAction, Post } from '@core/decorators/api-decorator';
import { GetHomeDeviceRecordMock, GetRecordListMock } from '@core/mocks/record-mock';
import { IPageReq, IPageRes } from '@core/models/api-response';
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(
    private http: HttpClient
  ) { }

  /** 取得辨識紀錄清單 (分頁) */
  @Post({
    path: '/record/listPage',
    mockData: GetRecordListMock
  })
  getRecordList: ApiAction<IGetRecordListReq, IPageRes<IRecordInfo[]>>;

  /** 取得辨識紀錄清單 (不分) */
  @Post({
    path: '/record/list',
    mockData: GetRecordListMock
  })
  getRecordListForStaff: ApiAction<IGetRecordListForStaffReq, IGetRecordListForStaffRes>;

  /** 取得今日大門設備之辨識異常清單(警衛用) */
  @Post({
    path: '/record/homeDevice',
    mockData: GetHomeDeviceRecordMock
  })
  getHomeDeviceRecordList: ApiAction<IGetHomeDeviceRecordListReq, IGetHomeDeviceRecordListRes>;
}

export interface IGetRecordListForStaffReq {
  searchName: string;
  dateStart: string;
  dateEnd: string;
}

export interface IGetRecordListForStaffRes {
  data: IRecordInfo[];
}

export interface IGetHomeDeviceRecordListReq {
  doorName: string;
  dateStart: string;
  dateEnd: string;
}

export interface IGetHomeDeviceRecordListRes {
  data: IRecordInfo[];
}

export interface IGetRecordListReq extends IPageReq {
  userName?: string;
  userId?: number;
  searchName?: string;
  type?: string;
  dateStart?: string;
  dateEnd?: string;
}

export interface IRecordInfo {
  id: number;
  userId: number;
  userName: string;
  userAccount: string;
  collegeName: string;
  departmentName: string;
  departmentSubName: string;
  identity: string;
  deviceId: number;
  deviceName: string;
  place: string;
  temperature: string;
  createdTime: string;
}