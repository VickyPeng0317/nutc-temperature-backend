import { Component, Input, OnInit } from '@angular/core';
import { IRecordInfo, RecordService } from '@core/services/record.service';

@Component({
  selector: 'home-user-list',
  templateUrl: './home-user-list.component.html',
  styleUrls: ['./home-user-list.component.scss']
})
export class HomeUserListComponent implements OnInit {
  @Input()
  recordList: IRecordInfo[] = [];
  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.recordService.getRecordList({perPage:1, currentPage:1}).subscribe(res => {
      this.recordList = res.data;
    });
  }

}
