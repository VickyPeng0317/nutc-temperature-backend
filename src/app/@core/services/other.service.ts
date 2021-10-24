import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiAction, Post } from '@core/decorators/api-decorator';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient) { }

  /** 取得所有"院/部門/職稱/科系/班級"清單 */
  @Post({
    path: '/other/allClgeAndDep',
    mockData: ['資訊學院', '資工系', '教務處']
  })
  getAllClgeAndDep: ApiAction<void, IAllClegAndDep>;
}

export interface IAllClegAndDep {
  Class: string[]
  College: string[]
  Department: string[]
  DepartmentName: string[]
  Staff: string[]
}