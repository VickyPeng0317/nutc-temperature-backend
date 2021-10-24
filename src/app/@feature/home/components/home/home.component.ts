import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtherService } from '@core/services/other.service';
import { IRecordInfo, RecordService } from '@core/services/record.service';
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
    searchName: new FormControl(''),
    dateStart: new FormControl(
      new Date(moment().format('yyyy/MM/DD 00:00:00'))
    ),
    dateEnd: new FormControl(
      new Date(moment().format('yyyy/MM/DD 23:59:59'))
    )
  });
  recordList: IRecordInfo[] = [];
  allClegAndDep = [];
  filteredOptions$: Observable<string[]>;
  constructor(
    private recordService: RecordService,
    private otherService: OtherService
  ) {}
  
  ngOnInit(): void {
    this.getRecordListForStaff();
    this.onFormChange();
    this.otherService.getAllClgeAndDep().subscribe(res => {
      Object.keys(res).forEach(key => {
        if (!res[key]) {
          return;
        }
        this.allClegAndDep = [...this.allClegAndDep, ...res[key]];
      });
      this.filteredOptions$ = of(this.allClegAndDep);
    });
  }

  onSelectionChange(value) {
    const list = this.allClegAndDep.filter(x => x.includes(value));
    this.filteredOptions$ = of(list);
  }

  onFormChange() {
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.getRecordListForStaff();
    });
  }

  getRecordListForStaff() {
    const searchFormData = this.searchForm.getRawValue();
    const { searchName } = searchFormData;
    const dateStart = moment(searchFormData.dateStart).format('yyyy/MM/DD HH:mm:ss');
    const dateEnd = moment(searchFormData.dateEnd).format('yyyy/MM/DD HH:mm:ss');
    const params = { searchName, dateStart, dateEnd };
    this.recordService.getRecordListForStaff(params).subscribe(res => {
      this.recordList = res.data;
    });
  }


}
