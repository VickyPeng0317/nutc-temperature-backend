import { Component, OnInit } from '@angular/core';
import { StoreService } from '@core/services/store.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'front-menu',
  templateUrl: './front-menu.component.html',
  styleUrls: ['./front-menu.component.scss']
})
export class FrontMenuComponent implements OnInit {
  items: IMenuItem[] = [
    {
      title: '首頁',
      icon: 'home',
      link: 'home',
      identity: 'teacher'
    },
    {
      title: '大門設備',
      icon: 'inbox',
      link: '/front/home/door',
      identity: 'teacher'
    },
    {
      title: '裝置管理',
      icon: 'speaker',
      link: 'device',
      identity: 'teacher'
    },
    {
      title: '使用者管理',
      icon: 'person',
      link: 'user',
      identity: 'teacher'
    },
    {
      title: '辨識記錄查詢',
      icon: 'thermometer',
      link: 'record'
    }
  ];
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    const userIdentity = this.storeService.getUserInfo().identity;
    this.items = this.items.filter(x => {
      const { identity } = x;
      const isShow = !!identity
        ? userIdentity === identity
        : true;
      return isShow;
    });
  }

}

interface IMenuItem extends NbMenuItem {
  identity?: string;
}