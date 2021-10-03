import { Component, OnInit } from '@angular/core';
import { RecordService } from '@core/services/record.service';

@Component({
  selector: 'home-user-list',
  templateUrl: './home-user-list.component.html',
  styleUrls: ['./home-user-list.component.scss']
})
export class HomeUserListComponent implements OnInit {
  recordList = [];
  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.recordService.getRecordList().subscribe(res => {
      this.recordList = res.concat(res);
    });
  }

}
