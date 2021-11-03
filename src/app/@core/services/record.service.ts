import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '@environments/environment';
import { ApiAction, Post } from '@core/decorators/api-decorator';
import { GerDoorCountListMock, GetCollegeCountListMock, GetHomeDeviceRecordMock, GetRecordListAllMock, GetRecordListForStaffMock, GetRecordListMock } from '@core/mocks/record-mock';
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

  /** 取得辨識紀錄清單 (全部) */
  @Post({
    path: '/record/listAll',
    mockData: GetRecordListAllMock
  })
  getRecordListAll: ApiAction<IGetRecordListAllReq, { data: IRecordInfo[] }>;

  /** 取得辨識紀錄清單 (不分) */
  @Post({
    path: '/record/list',
    mockData: GetRecordListForStaffMock
  })
  getRecordListForStaff: ApiAction<IGetRecordListForStaffReq, IGetRecordListForStaffRes>;

  /** 取得今日大門設備之辨識異常清單(警衛用) */
  @Post({
    path: '/record/homeDevice',
    mockData: GetHomeDeviceRecordMock
  })
  getHomeDeviceRecordList: ApiAction<IGetHomeDeviceRecordListReq, IGetHomeDeviceRecordListRes>;

  /** 取得各學院&系感測人數 */
  @Post({
    path: '/record/college',
    mockData: GetCollegeCountListMock
  })
  getCollegeCountList: ApiAction<IGetCollegeCountListReq, IGetCollegeCountListRes>;

  /** 取得各時段大門口感測人數 */
  @Post({
    path: '/record/door',
    mockData: GerDoorCountListMock
  })
  getDoorCountList: ApiAction<IGetDoorCountListReq, IGetDoorCountListRes>;

  /** 取得前後兩小時接觸人員清單 */
  @Post({
    path: '/record/contactList',
    mockData: GetRecordListAllMock
  })
  getContactList: ApiAction<IGetContactListReq, IGetContactListRes>;
}

export interface IGetContactListRes {
  data: IRecordInfo[];
}

export interface IGetContactListReq {
  createdTime: string;
  place: string;
}

export interface IGetDoorCountListRes {
  data: IDoorCount[];
}

export interface IGetDoorCountListReq {
  dateStart: string;
  dateEnd: string;
}

export interface IGetCollegeCountListReq {
  dateStart: string;
  dateEnd: string;
}

export interface IGetCollegeCountListRes {
  data: ICollegeCount[];
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
  userAccount?: string;
  type?: string;
  dateStart?: string;
  dateEnd?: string;
}

export interface IGetRecordListAllReq {
  userName?: string;
  userId?: number;
  searchName?: string;
  userAccount?: string;
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

export interface ICollegeCount {
  collegeName: string;
  departmentCountList: IDepartmentCount[];
}

export interface IDepartmentCount {
  departmentName: string;
  count: number;
}

export interface IDoorCount {
  doorName: string;
  hourCountList: IHourCount[];
}

export interface IHourCount {
  hour: string;
  count: number;
}