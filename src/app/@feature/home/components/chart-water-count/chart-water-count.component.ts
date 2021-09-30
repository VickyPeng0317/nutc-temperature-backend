import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'chart-water-count',
  templateUrl: './chart-water-count.component.html',
  styleUrls: ['./chart-water-count.component.scss']
})
export class ChartWaterCountComponent implements OnInit {
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
      backgroundColor: 'rgb(0,214,143)',
      borderColor: 'rgb(0,214,143)',
      hoverBackgroundColor: '#00bb7d',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
