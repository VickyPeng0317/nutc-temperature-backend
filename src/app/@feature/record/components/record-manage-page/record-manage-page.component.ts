import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  searchForm = new FormGroup({
    userName: new FormControl(),
    searchName: new FormControl(),
    type: new FormControl(),
    dateRange: new FormControl(),
  });
  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.getRecordList();
  }

  getRecordList() {
    const params = this.searchForm.getRawValue();
    this.recordService.getRecordList(params).subscribe(res => {
      this.recordList = res.data;
    });
  }

}
