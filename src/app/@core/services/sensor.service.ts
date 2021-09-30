import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  sensorServer = 'http://nr.mayo.gq:2095/api/get_data?table=';
  constructor(
    private http: HttpClient
  ) { }

  /**
   * 取得溫溼度
   */
  getTAHLog() {
    const url = this.sensorServer + 'SAC_SensorLogTAH';
    return this.http.get<ISersorResult<ILogItem[]>>(url);
  }

  /**
   * 取得酸鹼度
   */
  getPHLog() {
    const url = this.sensorServer + 'SAC_SensorLogPH';
    return this.http.get<ISersorResult<ILogItem[]>>(url);
  }

  /**
   * 取得水位
   */
  getWHLog() {
    const url = this.sensorServer + 'SAC_SensorLogWH';
    return this.http.get<ISersorResult<ILogItem[]>>(url);
  }

  /**
   * 取得固態繼電器
   */
  getSSRLog() {
    const url = this.sensorServer + 'SAC_SensorLogSSR';
    return this.http.get<ISersorResult<ILogItem[]>>(url);
  }
}

export interface ILogItem {
  LogId: number;
  SensorId: number;
  Value: string;
  CreateTime: string;
}

interface ISersorResult<T> {
  table: string;
  res: boolean;
  data: T;
}
