import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'front-menu',
  templateUrl: './front-menu.component.html',
  styleUrls: ['./front-menu.component.scss']
})
export class FrontMenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: '首頁',
      icon: 'home',
      link: 'home'
    },
    {
      title: '大門設備',
      icon: 'inbox',
      link: '/front/home/door'
    },
    {
      title: '裝置管理',
      icon: 'speaker',
      link: 'device'
    },
    {
      title: '使用者管理',
      icon: 'person',
      link: 'user'
    },
    {
      title: '辨識記錄查詢',
      icon: 'thermometer',
      link: 'record'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
