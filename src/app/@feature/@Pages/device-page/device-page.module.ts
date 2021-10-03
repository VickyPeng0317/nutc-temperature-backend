import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceModule } from '@feature/device/device.module';
import { DevicePageRoutingModule } from './device-page-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DevicePageRoutingModule,
    DeviceModule
  ]
})
export class DevicePageModule { }
