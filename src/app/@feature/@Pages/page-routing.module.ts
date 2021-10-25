import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 首頁
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then(m => m.HomePageModule),
  },
  // 任務
  {
    path: 'user',
    loadChildren: () =>
      import('./user-page/user-page.module').then(m => m.UserPageModule),
  },
  // 裝置
  {
    path: 'device',
    loadChildren: () =>
      import('./device-page/device-page.module').then(m => m.DevicePageModule),
  },
  // 紀錄
  {
    path: 'record',
    loadChildren: () =>
      import('./record-page/record-page.module').then(m => m.RecordPageModule),
  },
  {
    path: '',
    redirectTo: 'record',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }
