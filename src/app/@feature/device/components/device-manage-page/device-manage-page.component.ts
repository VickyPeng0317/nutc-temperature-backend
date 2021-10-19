import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { ModifyDeviceDialogComponent } from '@feature/device/dialogs/modify-device-dialog/modify-device-dialog.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'device-manage-page',
  templateUrl: './device-manage-page.component.html',
  styleUrls: ['./device-manage-page.component.scss']
})
export class DeviceManagePageComponent implements OnInit {
  columnList = [
    {
      key: 'deviceName',
      name: '名稱'
    },
    {
      key: 'deviceCode',
      name: '機型'
    },
    {
      key: 'place',
      name: '位置'
    },
    {
      key: 'status',
      name: '狀態'
    },
    {
      key: 'type',
      name: '辨識方式'
    }
  ];
  deviceList: IDeviceInfo[] = [];
  searchForm = new FormGroup({
    deviceName: new FormControl(),
    place: new FormControl(),
  });
  constructor(
    private dialogService: NbDialogService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getDeviceList();
  }

  getDeviceList() {
    const params = this.searchForm.getRawValue();
    this.deviceService.getDeviceList(params).subscribe(res =>{
      this.deviceList = res.data;
    });
  }

  openCreateDialog() {
    this.dialogService.open(ModifyDeviceDialogComponent).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.createDevice(res);
    });
  }

  openEditDialog(deviceId: number) {
    const dialogData = {
      context: { deviceId }
    };
    this.dialogService.open(ModifyDeviceDialogComponent, dialogData).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.editDevice(res);
    });
  }

  createDevice(params) {
    this.deviceService.createDevice(params).subscribe(res => {
      if (!res.isSuccess) {
        return alert('新增失敗');
      }
      alert('新增成功');
      this.getDeviceList();
    });
  }

  editDevice(params) {
    this.deviceService.editDevice(params).subscribe(res => {
      if (!res.isSuccess) {
        return alert('編輯失敗');
      }
      alert('編輯成功');
      this.getDeviceList();
    });
  }

  deleteDevice(deviceId: number) {
    const isDelete = confirm('是否要刪除此設備 ?');
    if (!isDelete) {
      return;
    }
    this.deviceService.deleteDevice({ deviceId }).subscribe(res => {
      if (!res.isSuccess) {
        return alert('刪除失敗');
      }
      alert('刪除成功');
      this.getDeviceList();
    });
  }

}
