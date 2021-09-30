import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'chart-temperature-and-humidity',
  templateUrl: './chart-temperature-and-humidity.component.html',
  styleUrls: ['./chart-temperature-and-humidity.component.scss']
})
export class ChartTemperatureAndHumidityComponent implements OnInit {
  barChartType: ChartType = 'line';

  // charts.component.ts
  barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right'
      }]
    }
  };

  barChartLegend = true;

  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [23.5, 24, 28, 26, 23, 23, 17],
      yAxisID: 'A',
      label: '溫度',
      fill: false,
    },
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      yAxisID: 'B',
      label: '濕度'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
