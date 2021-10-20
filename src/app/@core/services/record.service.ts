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

  /** 取得辨識紀錄清單 */
  @Post({
    path: '/record/list',
    mockData: GetRecordListMock
  })
  getRecordList: ApiAction<IGetRecordListReq, IPageRes<IRecordInfo[]>>;

  /** 取得今日大門設備之辨識異常清單(警衛用) */
  @Post({
    path: '/record/homeDevice',
    mockData: GetHomeDeviceRecordMock
  })
  getHomeDeviceRecordList: ApiAction<void, IGetHomeDeviceRecordListRes>;
}

export interface IGetHomeDeviceRecordListRes {
  data: IRecordInfo[];
}

export interface IGetRecordListReq extends IPageReq {
  userName?: string;
  userAccount?: string;
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
  deviceId: number;
  deviceName: string;
  temperature: string;
  createdTime: string;
}