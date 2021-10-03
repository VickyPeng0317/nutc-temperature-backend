import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'home-chart-hours',
  templateUrl: './home-chart-hours.component.html',
  styleUrls: ['./home-chart-hours.component.scss']
})
export class HomeChartHoursComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
