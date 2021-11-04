import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'home-user-list',
  templateUrl: './home-user-list.component.html',
  styleUrls: ['./home-user-list.component.scss']
})
export class HomeUserListComponent implements OnChanges {
  @Input()
  recordList: IRecordInfo[] = [];
  @Input()
  isLoading = false;
  showList: IRecordInfo[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.recordList?.currentValue) {
      return;
    }
    this.showList = this.recordList.filter(x => +x.temperature > environment.HOT);
  }
}
