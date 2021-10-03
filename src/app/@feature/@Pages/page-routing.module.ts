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
    // 任務
    {
      path: 'device',
      loadChildren: () =>
        import('./device-page/device-page.module').then(m => m.DevicePageModule),
    },
  {
    path: '',
    redirectTo: 'home',
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
