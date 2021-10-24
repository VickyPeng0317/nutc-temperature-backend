import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManagePageComponent } from './components/device-manage-page/device-manage-page.component';
import { ModifyDeviceDialogComponent } from './dialogs/modify-device-dialog/modify-device-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ViewDeviceInfoDialogComponent } from './dialogs/view-device-info-dialog/view-device-info-dialog.component';



@NgModule({
  declarations: [DeviceManagePageComponent, ModifyDeviceDialogComponent, ViewDeviceInfoDialogComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class DeviceModule { }
