import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiRes } from '@core/models/api-response';
import { environment } from '@environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient
  ) { }

  getDeviceList() {
    const url = environment.apiUrl + '/device/list';
    return this.http.get<IDeviceInfo[]>(url);
    // const deviceInfo: IDeviceInfo = {
    //   id: 1,
    //   name: '體溫感測器',
    //   deviceCode: 'x06812-73',
    //   place: '資訊大樓2501',
    //   maintainOrganization: '資工系',
    //   maintainCall: '04-2222-3333',
    //   status: '啟用',
    //   type: '影像辨識',
    // };
    // const res = [1,1,1,1,1].map((_, i) =>{
    //   const id = deviceInfo.id + i;
    //   const name = deviceInfo.name + i;
    //   const deviceCode = deviceInfo.deviceCode + i;
    //   return {...deviceInfo, id, name, deviceCode};
    // });
    // return of(res);
  }

  getDeviceInfo(deviceCode: string) {
    const url = environment.apiUrl + '/device/code';
    return this.http.get<IDeviceInfo>(url, { params: { deviceCode }});
    // const deviceInfo: IDeviceInfo = {
    //   id: 1,
    //   name: '體溫感測器01',
    //   deviceCode: 'x06812-7301',
    //   place: '資訊大樓2501',
    //   maintainOrganization: '資工系',
    //   maintainCall: '04-2222-3333',
    //   status: '啟用',
    //   type: '影像辨識',
    // };
    // return of(deviceInfo);
  }
  createDevice(params: IDeviceInfo) {
    const url = environment.apiUrl + '/device/insert';
    return this.http.get<IApiRes & IDeviceInfo>(url, { params: { ...params }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
    // });
  }
  editDevice(params: IDeviceInfo) {
    const url = environment.apiUrl + '/device/update';
    return this.http.get<IApiRes & IDeviceInfo>(url, { params: { ...params }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
    // });
  }
  deleteDevice(id: string) {
    const url = environment.apiUrl + '/device/delete';
    return this.http.get<IApiRes & IDeviceInfo>(url, { params: { id }});
    // return of<IApiResult<{}>>({
    //   status: '1',
    //   msg: 'success',
    //   data: {}
  }
}

export interface IDeviceInfo {
  id: number & string;
  name: string;
  deviceCode: string;
  place: string;
  maintainOrganization: string;
  maintainCall: string;
  status: string;
  type: string;
}