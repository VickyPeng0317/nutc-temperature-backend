import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPageParams } from '@core/models/page-params';
import { RecordService } from '@core/services/record.service';
import { StoreService } from '@core/services/store.service';
import * as moment from 'moment';
import { debounceTime } from 'rxjs/operators';

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
    dateRange: new FormControl({
      start: new Date(moment().format('YYYY/MM/DD 00:00:00')),
      end: new Date(moment().format('YYYY/MM/DD 23:59:59'))
    }),
  });
  pageParams: IPageParams = {
    currentPage: 1,
    perPage: 6,
    total: 6
  };
  isStudent = false;
  constructor(
    private recordService: RecordService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    const userInfo = this.storeService.getUserInfo();
    this.isStudent = userInfo.identity === 'student';
    this.getRecordList();
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
      this.getRecordList();
    });
  }
  /**
   * 切換分頁
   */
  pageChange(currentPage) {
    this.getRecordList(currentPage);
  }
  /**
   * 取得紀錄清單
   */
   getRecordList(currentPage = 1) {
    const { dateRange, ...formData } = this.searchForm.getRawValue();
    const dateStart = moment(dateRange.start).format('YYYY/MM/DD HH:mm:ss');
    const dateEnd = moment(dateRange.end).format('YYYY/MM/DD HH:mm:ss');
    let params = {
      currentPage,
      perPage: 6,
      ...formData,
      dateStart,
      dateEnd
    };
    if (this.isStudent) {
      const userInfo = this.storeService.getUserInfo();
      params = { ...params, userId: userInfo.userId };
    }
    this.recordService.getRecordList(params).subscribe(res => {
      this.recordList = res.data;
      this.pageParams = res.pageParams;
    });
  }

}
