import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '@core/services/device.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'modify-device-dialog',
  templateUrl: './modify-device-dialog.component.html',
  styleUrls: ['./modify-device-dialog.component.scss']
})
export class ModifyDeviceDialogComponent implements OnInit {
  @Input()
  deviceId?: number;
  form = new FormGroup({
    deviceId: new FormControl(''),
    deviceName: new FormControl('', Validators.required),
    deviceCode: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    maintainOrganization: new FormControl('', Validators.required),
    maintainCall: new FormControl(''),
    status: new FormControl('啟用', Validators.required),
    type: new FormControl('影像辨識', Validators.required),
  });
  constructor(
    protected dialogRef: NbDialogRef<ModifyDeviceDialogComponent>,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    const isEdit = !!this.deviceId;
    if (!isEdit) {
      return;
    }
    this.setEditForm(this.deviceId);
  }

  setEditForm(deviceId: number) {
    this.deviceService.getDeviceInfo({ deviceId }).subscribe(res => {
      const deviceInfo = res;
      this.form.patchValue(deviceInfo);
    });
  }

  send() {
    const res = {
      ...this.form.getRawValue()
    };
    this.dialogRef.close(res);
  }

  close() {
    this.dialogRef.close();
  }

}
