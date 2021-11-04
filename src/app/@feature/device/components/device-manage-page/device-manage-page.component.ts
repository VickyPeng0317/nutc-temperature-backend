import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPageParams } from '@core/models/page-params';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { ModifyDeviceDialogComponent } from '@feature/device/dialogs/modify-device-dialog/modify-device-dialog.component';
import { ViewDeviceInfoDialogComponent } from '@feature/device/dialogs/view-device-info-dialog/view-device-info-dialog.component';
import { NbDialogService } from '@nebular/theme';
import { debounceTime } from 'rxjs/operators';

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
      name: '地點'
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
  pageParams: IPageParams = {
    currentPage: 1,
    perPage: 6,
    total: 6
  };
  constructor(
    private dialogService: NbDialogService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getDeviceList();
    this.onSearch();
  }
  /**
   * 監聽查詢
   */
   onSearch() {
    this.searchForm.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(() => {
      this.pageParams.currentPage = 1;
      this.getDeviceList();
    });
  }
  /**
   * 切換分頁
   */
  pageChange(currentPage) {
    this.getDeviceList(currentPage);
  }
  /**
   * 取得裝置清單
   */
  getDeviceList(currentPage = 1) {
    const formData = this.searchForm.getRawValue();
    const params = {
      currentPage,
      perPage: 6,
      ...formData
    };
    this.deviceService.getDeviceList(params).subscribe(res =>{
      this.deviceList = res.data;
      this.pageParams = res.pageParams;
      console.log(res);
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

  openInfoDialog(deviceId: number) {
    const dialogData = {
      context: { deviceId }
    };
    this.dialogService.open(ViewDeviceInfoDialogComponent, dialogData);
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
