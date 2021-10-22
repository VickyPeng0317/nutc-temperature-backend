import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';
import { ChartType } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'home-chart-hours',
  templateUrl: './home-chart-hours.component.html',
  styleUrls: ['./home-chart-hours.component.scss']
})
export class HomeChartHoursComponent implements OnInit, OnChanges {
  @Input()
  recordList: IRecordInfo[] = [];
  
  barChartType: ChartType = 'bar';

  barChartOptions = {
    responsive: true,
  };

  barChartLegend = true;

  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [10, 5, 7, 12, 11, 10, 6],
      label: '次數',
      backgroundColor: 'rgb(255,61,113)',
      borderColor: 'rgb(255,61,113)',
      hoverBackgroundColor: 'rgb(255,61,150)',
    }
  ];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.recordList.currentValue.length === 0) {
      return;
    }
    this.generateChart();
  }

  ngOnInit(): void {
    
  }

  generateChart() {
    const allTime = [... new Set(
      this.recordList.map(x => moment(x.createdTime).format('HH:00'))
    )].sort();
    const chartData = allTime.map(time => {
      const count = this.recordList.filter(record => {
        const recordTime = moment(record.createdTime).format('HH:00');
        return recordTime === time && +record.temperature > 37.3;
      }).length;
      return count;
    });
    this.barChartLabels = allTime;
    this.barChartData[0].data = chartData;
  }

}
