import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICollegeCount } from '@core/services/record.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'home-chart-college-count',
  templateUrl: './home-chart-college-count.component.html',
  styleUrls: ['./home-chart-college-count.component.scss']
})
export class HomeChartCollegeCountComponent implements OnChanges {
  @Input()
  collegeCountList: ICollegeCount[] = [];
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
    if (!changes.collegeCountList.currentValue) {
      return;
    }
    this.generateChart();
  }
  generateChart() {
    const allCollegeName = this.collegeCountList.map(x => x.collegeName);
    const allCollegeCount = this.collegeCountList.map(col => 
      col.departmentCountList.reduce((res, item) => res + item.count, 0)
    );
    this.barChartLabels = allCollegeName;
    this.barChartData[0].data = allCollegeCount;
  }

}
