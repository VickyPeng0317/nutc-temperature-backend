import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICollegeCount } from '@core/services/record.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'home-chart-department-count',
  templateUrl: './home-chart-department-count.component.html',
  styleUrls: ['./home-chart-department-count.component.scss']
})
export class HomeChartDepartmentCountComponent implements OnChanges {
  @Input()
  collegeCountItem: ICollegeCount;
  @Input()
  index: number;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartOptions = {
    responsive: true,
  };
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
    if (!changes.collegeCountItem.currentValue) {
      return;
    }
    this.generateChart();
  }
  generateChart() {
    const allDepartmentName = this.collegeCountItem.departmentCountList.map(x => x.departmentName);
    const allDepartmentCount = this.collegeCountItem.departmentCountList.map(dep => dep.count);
    this.barChartLabels = allDepartmentName;
    this.barChartData[0].data = allDepartmentCount;
  }
}
