import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'chart-humidity',
  templateUrl: './chart-humidity.component.html',
  styleUrls: ['./chart-humidity.component.scss']
})
export class ChartHumidityComponent implements OnInit {
  barChartType: ChartType = 'line';

  barChartOptions = {
    responsive: true,
  };

  barChartLegend = true;

  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      label: '濕度',
      backgroundColor: 'rgb(174,218,247,0.5)',
      borderColor: '#36A2EB',
      pointBackgroundColor: '#36A2EB',
      pointBorderColor: '#36A2EB'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
