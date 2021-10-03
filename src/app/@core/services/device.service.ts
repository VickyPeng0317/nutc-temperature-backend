import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient
  ) { }

  getDeviceList() {
    const deviceInfo: IDeviceInfo = {
      id: 1,
      name: '體溫感測器',
      deviceCode: 'x06812-73',
      place: '資訊大樓2501',
      maintainOrganization: '資工系',
      maintainCall: '04-2222-3333',
      status: '啟用',
      type: '影像辨識',
    };
    const res = [1,1,1,1,1].map((_, i) =>{
      const id = deviceInfo.id + i;
      const name = deviceInfo.name + i;
      const deviceCode = deviceInfo.deviceCode + i;
      return {...deviceInfo, id, name, deviceCode};
    });
    return of(res);
  }

  getDeviceInfo(id: number) {
    const deviceInfo: IDeviceInfo = {
      id: 1,
      name: '體溫感測器01',
      deviceCode: 'x06812-7301',
      place: '資訊大樓2501',
      maintainOrganization: '資工系',
      maintainCall: '04-2222-3333',
      status: '啟用',
      type: '影像辨識',
    };
    return of(deviceInfo);
  }
}

export interface IDeviceInfo {
  id: number;
  name: string;
  deviceCode: string;
  place: string;
  maintainOrganization: string;
  maintainCall: string;
  status: string;
  type: string;
}