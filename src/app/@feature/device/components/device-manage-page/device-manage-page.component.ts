import { Component, OnInit } from '@angular/core';
import { DeviceService } from '@core/services/device.service';
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
      key: 'name',
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
  deviceList = [];
  constructor(
    private dialogService: NbDialogService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getDeviceList();
  }

  getDeviceList() {
    this.deviceService.getDeviceList().subscribe(res =>{
      this.deviceList = res;
    });
  }

  openCreateDialog() {
    this.dialogService.open(ModifyDeviceDialogComponent).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      // this.createDevice(res);
    });
  }

  openEditDialog(id: number) {
    const dialogData = {
      context: { id }
    };
    this.dialogService.open(ModifyDeviceDialogComponent, dialogData).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      // this.editDevice(res);
    });
  }

  deleteDevice(id: number) {
    const isDelete = confirm('是否要刪除此設備 ?');
    if (!isDelete) {
      return;
    }
    this.deviceList = this.deviceList.filter(x => x.id !== id);
  }

}
