import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiAction, Post } from '@core/decorators/api-decorator';
import { GetDeviceInfoMock, GetDeviceListMock, GetHomeDeviceListMock } from '@core/mocks/device-mock';
import { SuccessRes } from '@core/mocks/shared-mock';
import { IPageReq, IPageRes } from '@core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient
  ) { }

  /** 取得裝置清單 */
  @Post({
    path: '/device/list',
    mockData: GetDeviceListMock
  })
  getDeviceList: ApiAction<IGetDeviceListReq,  IPageRes<IDeviceInfo[]>>;
  
  /** 取得裝置詳細 */
  @Post({
    path: '/device/info',
    mockData: GetDeviceInfoMock
  })
  getDeviceInfo: ApiAction<{ deviceId: number }, IDeviceInfo>;
 
  /** 新增裝置 */
  @Post({
    path: '/device/create',
    mockData: SuccessRes
  })
  createDevice: ApiAction<IDeviceInfo, { isSuccess: boolean }>;
  
  /** 修改裝置 */
  @Post({
    path: '/device/update',
    mockData: SuccessRes
  })
  editDevice: ApiAction<IDeviceInfo, { isSuccess: boolean }>;
  
  /** 刪除裝置 */
  @Post({
    path: '/device/delete',
    mockData: SuccessRes
  })
  deleteDevice: ApiAction<{ deviceId: number }, { isSuccess: boolean }>;
  
  /** 取得大門設備清單(警衛用) */
  @Post({
    path: '/device/homeUse',
    mockData: GetHomeDeviceListMock
  })
  getHomeDeviceList: ApiAction<void,  IGetHomeDeviceList>;
}

interface IGetHomeDeviceList {
  data: IDeviceInfo[];
}

interface IGetDeviceListReq extends IPageReq {
  deviceName: string;
  place: string;
}

export interface IDeviceInfo {
  deviceId?: number;
  deviceName: string;
  deviceCode: string;
  place: string;
  maintainOrganization: string;
  maintainCall: string;
  status: string;
  type: string;
}