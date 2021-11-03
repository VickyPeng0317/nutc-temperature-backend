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
  index: number = 0;
  // colorList = ['#FFA1B5','#89C7F0','#FDE29B','#93D9DB','#C0D6E3','#FED3A6','#FF8D9C','#94D8D7','#9498A3'].sort(function() {
  //   return (0.5-Math.random());
  // });
  colorList = ['#FFA1B5', '#89C7F0', '#FDE29B', '#93D9DB', '#C0D6E3', '#FED3A6', '#FF8D9C', '#94D8D7', '#9498A3'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartOptions = {
    responsive: true,
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
        ticks: {
          max: 500,
          min: 0
        }
      }]
    },
    hover: {
      animationDuration: 1
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.textAlign = 'center';
          ctx.fillStyle = "rgba(0, 0, 0, 1)";
          ctx.textBaseline = 'bottom';
        // Loop through each data in the datasets
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      }
    }
  };
  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [10, 5, 7, 12, 11, 10, 6],
      label: '',
      backgroundColor: this.colorList,
      borderColor: this.colorList,
      hoverBackgroundColor: this.colorList,
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
