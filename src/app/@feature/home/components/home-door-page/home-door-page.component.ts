import { Component, OnInit } from '@angular/core';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { IRecordInfo, RecordService } from '@core/services/record.service';

@Component({
  selector: 'home-door-page',
  templateUrl: './home-door-page.component.html',
  styleUrls: ['./home-door-page.component.scss']
})
export class HomeDoorPageComponent implements OnInit {
  homeDeviceList: IDeviceInfo[] = [];
  recordList: IRecordInfo[] = [];
  constructor(
    private deviceService: DeviceService,
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.deviceService.getHomeDeviceList({ doorName: '123'}).subscribe(res => {
      this.homeDeviceList = res.data;
    });
    const params = {
      doorName: '',
      dateStart: '',
      dateEnd: ''
    };
    this.recordService.getHomeDeviceRecordList(params).subscribe(res => {
      this.recordList = res.data;
    });
  }

}
