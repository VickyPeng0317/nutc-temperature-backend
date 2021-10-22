import { Component, Input, OnInit } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';

@Component({
  selector: 'home-user-percent',
  templateUrl: './home-user-percent.component.html',
  styleUrls: ['./home-user-percent.component.scss']
})
export class HomeUserPercentComponent implements OnInit {
  @Input()
  recordList: IRecordInfo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
