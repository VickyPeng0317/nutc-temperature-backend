import { Component, OnInit } from '@angular/core';
import { ChartType, ChartColor } from 'chart.js';

@Component({
  selector: 'chart-temperature',
  templateUrl: './chart-temperature.component.html',
  styleUrls: ['./chart-temperature.component.scss']
})
export class ChartTemperatureComponent implements OnInit {
  barChartType: ChartType = 'line';

  barChartOptions = {
    responsive: true,
  };

  barChartLegend = true;

  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [23.5, 24, 28, 26, 23, 23, 17],
      label: '溫度',
      fill: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
