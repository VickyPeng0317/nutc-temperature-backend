import { Component, OnInit } from '@angular/core';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';

@Component({
  selector: 'home-door-page',
  templateUrl: './home-door-page.component.html',
  styleUrls: ['./home-door-page.component.scss']
})
export class HomeDoorPageComponent implements OnInit {
  homeDeviceList: IDeviceInfo[] = [];
  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.deviceService.getHomeDeviceList().subscribe(res => {
      this.homeDeviceList = res.data;
    });
  }

}
