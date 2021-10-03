import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'home-chart-days',
  templateUrl: './home-chart-days.component.html',
  styleUrls: ['./home-chart-days.component.scss']
})
export class HomeChartDaysComponent implements OnInit {
  barChartType: ChartType = 'line';

  barChartOptions = {
    responsive: true,
  };

  barChartLegend = true;

  barChartLabels = ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07'];
  barChartData = [
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      label: '次數',
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
