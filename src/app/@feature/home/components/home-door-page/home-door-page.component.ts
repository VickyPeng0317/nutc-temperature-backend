import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import { forkJoin, from, interval, Observable, Subject, timer } from 'rxjs';
import * as moment from 'moment';
import { finalize, map, mergeMap, switchMap, takeUntil, tap, toArray } from 'rxjs/operators';
@Component({
  selector: 'home-door-page',
  templateUrl: './home-door-page.component.html',
  styleUrls: ['./home-door-page.component.scss']
})
export class HomeDoorPageComponent implements OnInit, OnDestroy {
  allDoorName = ['三民校區大門', '三民校區後門', '民生校區大門'];
  obsList = (new Observable()).pipe(map(_ => []));
  cacheList = [];
  searchForm = new FormGroup({
    dateStart: new FormControl(
      moment().format('YYYY/MM/DD 00:00:00')
    ),
    dateEnd: new FormControl(
      moment().format('YYYY/MM/DD 23:59:59')
    )
  });
  HOT_NUM = 37.3;
  COOL_NUM = 35.5;
  selectedTabIndex = 0;
  endSubject = new Subject();
  isLoading = false;
  constructor(
    private deviceService: DeviceService,
    private recordService: RecordService
  ) { }

  ngOnDestroy(): void {
    this.endSubject.next('end');
  }

  ngOnInit(): void {
    this.initData();
    interval(10000).pipe(takeUntil(this.endSubject)).subscribe(() => {
      this.initData();
    });
  }

  initData() {
    this.isLoading = true;
    this.obsList = from(this.allDoorName).pipe(
      mergeMap(doorName => this.getDoorDeviceAndRecord(doorName)),
      toArray(),
      map(list => this.allDoorName.map(name => 
        list.find(x => x.doorName === name)
      )),
      tap(list => {
        this.cacheList = list;
        this.isLoading = false;
      })
    );
  }

  changeTab($event) {
    console.log($event.tabTitle);
    this.selectedTabIndex = this.allDoorName.findIndex(x => x === $event.tabTitle);
  }

  getDoorDeviceAndRecord(doorName: string) {
    const { dateStart, dateEnd } = this.searchForm.getRawValue();
    return forkJoin([
      this.deviceService.getHomeDeviceList({ doorName }),
      this.recordService.getHomeDeviceRecordList({ doorName, dateStart, dateEnd}),
    ]).pipe(
      map(([deviceRes, recordRes]) => {
        const allRecordList = recordRes.data;
        const deviceList = deviceRes.data.map(device => {
          const deviceRecordList = allRecordList.filter(record => 
            record.deviceId === device.deviceId
          );
          const allCount = deviceRecordList.length;
          const hotCount = deviceRecordList.filter(x => +x.temperature >= this.HOT_NUM).length;
          const coolCount = deviceRecordList.filter(x => +x.temperature <= this.COOL_NUM).length;
          const successCount = allCount - hotCount - coolCount;
          const waringinRecordList = deviceRecordList.filter(({temperature}) => 
            +temperature >= this.HOT_NUM || +temperature <= this.COOL_NUM
          );
          return {allCount, hotCount, coolCount, successCount, waringinRecordList, ...device};
        });
        return {doorName, deviceList}
      })
    );
  }

}
