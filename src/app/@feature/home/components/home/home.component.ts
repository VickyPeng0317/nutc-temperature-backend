import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import * as moment from 'moment';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm = new FormGroup({
    searchName: new FormControl(),
    dateStart: new FormControl(
      moment().format('YYYY/MM/DD 00:00:00')
    ),
    dateEnd: new FormControl(
      moment().format('YYYY/MM/DD 23:59:59')
    )
  });
  recordList: IRecordInfo[] = [];
  constructor(
    private recordService: RecordService
  ) {}
  
  ngOnInit(): void {
    this.getRecordListForStaff();
    this.onFormChange();
  }

  onFormChange() {
    this.searchForm.valueChanges.subscribe(() => {
      this.getRecordListForStaff();
    });
  }

  getRecordListForStaff() {
    const params = this.searchForm.getRawValue();
    this.recordService.getRecordListForStaff(params).subscribe(res => {
      this.recordList = res.data;
    });
  }


}
