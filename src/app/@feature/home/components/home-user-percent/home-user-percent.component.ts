import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'home-user-percent',
  templateUrl: './home-user-percent.component.html',
  styleUrls: ['./home-user-percent.component.scss']
})
export class HomeUserPercentComponent implements OnInit, OnChanges {
  @Input()
  recordList: IRecordInfo[] = [];
  @Input()
  isLoading = false;
  hotCount = 0;
  get percent () {
    return (this.hotCount/this.recordList.length)*100;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.recordList?.currentValue) {
      return;
    }
    this.hotCount = this.recordList.filter(x => +x.temperature > environment.HOT).length;
  }
  ngOnInit(): void {
  }

}
