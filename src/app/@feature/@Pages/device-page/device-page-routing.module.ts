import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceManagePageComponent } from '@feature/device/components/device-manage-page/device-manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceManagePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicePageRoutingModule { }
