import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';

@Component({
  selector: 'home-user-list',
  templateUrl: './home-user-list.component.html',
  styleUrls: ['./home-user-list.component.scss']
})
export class HomeUserListComponent implements OnChanges {
  @Input()
  recordList: IRecordInfo[] = [];
  showList: IRecordInfo[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.recordList.currentValue.length === 0) {
      return;
    }
    this.showList = this.recordList.filter(x => +x.temperature > 37.3);
  }
}
