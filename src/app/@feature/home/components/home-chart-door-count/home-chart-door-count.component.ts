import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IDoorCount } from '@core/services/record.service';
import { ChartOptions, ChartType } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'home-chart-door-count',
  templateUrl: './home-chart-door-count.component.html',
  styleUrls: ['./home-chart-door-count.component.scss']
})
export class HomeChartDoorCountComponent implements OnChanges {
  @Input()
  doorCountList: IDoorCount[] = [];
  @Input()
  isLoading = false;
  colorList = ['#FFA1B5','#89C7F0','#FDE29B','#93D9DB','#C0D6E3','#FED3A6','#FF8D9C','#94D8D7','#9498A3'];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
          tension: 0
      }
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '人數'
        },
        gridLines: {
            display: false
        },
        display: true,
        // ticks: {
        //   max: 2000,
        //   min: 0
        // }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: '時間'
        },
      }]
    }
  };
  barChartLabels = [];
  barChartData = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.doorCountList?.currentValue) {
      return;
    }
    this.generateChart();
  }
  generateChart() {
    if (this.doorCountList.length === 0) {
      return;
    }
    const allHour = this.doorCountList[0].hourCountList.map(x => 
      moment(`2021-11-03 ${x.hour}`).format('H')
    );
    const barChartData = this.doorCountList.map((door, index) => {
      const data = door.hourCountList.map(x => x.count);
      const label = door.doorName;
      const color = this.colorList[index];
      return {
        data, 
        label,
        backgroundColor: color,
        borderColor: color,
        hoverBackgroundColor: color,
        fill: false
      }
    });
    this.barChartLabels = allHour;
    this.barChartData = barChartData;
  }

}
