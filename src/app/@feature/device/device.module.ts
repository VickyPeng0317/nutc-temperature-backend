import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManagePageComponent } from './components/device-manage-page/device-manage-page.component';
import { ModifyDeviceDialogComponent } from './dialogs/modify-device-dialog/modify-device-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [DeviceManagePageComponent, ModifyDeviceDialogComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class DeviceModule { }
