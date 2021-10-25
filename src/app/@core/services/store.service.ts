import { Injectable } from '@angular/core';
import { IUserListItem } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getUserInfo() {
    const userInfoStr = this.getStorage('userInfo') || '{}';
    return JSON.parse(userInfoStr);
  }

  setUserInfo(userInfo: IUserListItem) {
    this.setStorage('userInfo', JSON.stringify(userInfo));
  }

  removeUserInfo() {
    this.setStorage('userInfo', JSON.stringify({}));
  }

  getStorage(key: string) {
    return localStorage.getItem(key);
  }

  setStorage(key: string, data: string) {
    localStorage.setItem(key, data);
  }
}
