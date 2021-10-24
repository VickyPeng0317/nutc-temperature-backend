import { Component, Input, OnInit } from '@angular/core';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'view-device-info-dialog',
  templateUrl: './view-device-info-dialog.component.html',
  styleUrls: ['./view-device-info-dialog.component.scss']
})
export class ViewDeviceInfoDialogComponent implements OnInit {
  @Input()
  deviceId: number;
  deviceInfo: IDeviceInfo = <IDeviceInfo>{};
  qrCodeData: string = 'null';
  constructor(
    private deviceService: DeviceService,
    protected dialogRef: NbDialogRef<ViewDeviceInfoDialogComponent>,
    ) { }
  ngOnInit(): void {
    this.deviceService.getDeviceInfo({ deviceId: this.deviceId }).subscribe(res => {
      this.deviceInfo = res;
      this.qrCodeData = JSON.stringify(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
