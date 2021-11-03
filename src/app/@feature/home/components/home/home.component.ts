import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtherService } from '@core/services/other.service';
import { ICollegeCount, IRecordInfo, RecordService } from '@core/services/record.service';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm = new FormGroup({
    dateStart: new FormControl(
      new Date(moment().format('yyyy/MM/DD 00:00:00'))
    ),
    dateEnd: new FormControl(
      new Date(moment().format('yyyy/MM/DD 23:59:59'))
    )
  });
  recordList: IRecordInfo[] = [];
  collegeCountList: ICollegeCount[] = [];
  
  constructor(
    private recordService: RecordService
  ) {}
  
  ngOnInit(): void {
    this.getRecordListForStaff();
    this.getCollegeCountList();
    this.onFormChange();
  }

  onFormChange() {
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.getRecordListForStaff();
      this.getCollegeCountList();
    });
  }

  getRecordListForStaff() {
    const searchFormData = this.searchForm.getRawValue();
    const dateStart = moment(searchFormData.dateStart).format('yyyy/MM/DD HH:mm:ss');
    const dateEnd = moment(searchFormData.dateEnd).format('yyyy/MM/DD HH:mm:ss');
    const params = { searchName: '', dateStart, dateEnd };
    this.recordService.getRecordListForStaff(params).subscribe(res => {
      this.recordList = res.data;
    });
  }

  getCollegeCountList() {
    const searchFormData = this.searchForm.getRawValue();
    const dateStart = moment(searchFormData.dateStart).format('yyyy/MM/DD HH:mm:ss');
    const dateEnd = moment(searchFormData.dateEnd).format('yyyy/MM/DD HH:mm:ss');
    const params = { dateStart, dateEnd };
    this.recordService.getCollegeCountList(params).subscribe(res => {
      this.collegeCountList = res.data;
    });
  }

}
