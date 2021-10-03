import { Component, OnInit } from '@angular/core';
import { RecordService } from '@core/services/record.service';

@Component({
  selector: 'record-manage-page',
  templateUrl: './record-manage-page.component.html',
  styleUrls: ['./record-manage-page.component.scss']
})
export class RecordManagePageComponent implements OnInit {
  columnList = [
    {
      key: 'userName',
      name: '使用者名稱'
    },
    {
      key: 'deviceName',
      name: '裝置名稱'
    },
    {
      key: 'temperature',
      name: '體溫'
    },
    {
      key: 'createdTime',
      name: '建立時間'
    }
  ];
  recordList = [];
  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.getRecordList();
  }

  getRecordList() {
    this.recordService.getRecordList().subscribe(res => {
      this.recordList = res;
    });
  }

}
