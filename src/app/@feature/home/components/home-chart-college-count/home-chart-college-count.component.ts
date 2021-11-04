import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICollegeCount } from '@core/services/record.service';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'home-chart-college-count',
  templateUrl: './home-chart-college-count.component.html',
  styleUrls: ['./home-chart-college-count.component.scss']
})
export class HomeChartCollegeCountComponent implements OnChanges {
  @Input()
  collegeCountList: ICollegeCount[] = [];
  @Input()
  isLoading = false;
  colorList = ['#FFA1B5','#89C7F0','#FDE29B','#93D9DB','#C0D6E3','#FED3A6','#FF8D9C','#94D8D7','#9498A3'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartOptions: ChartOptions = {};
  barChartLabels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  barChartData = [
    {
      data: [10, 5, 7, 12, 11, 10, 6],
      label: '次數',
      backgroundColor: this.colorList,
      borderColor: this.colorList,
      hoverBackgroundColor: this.colorList,
    }
  ];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.collegeCountList?.currentValue) {
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
    const max = allCollegeCount.length === 0 ? 0 : Math.max(...allCollegeCount) + 1;
    this.barChartOptions = this.getOption(max);
  }

  getOption(max) {
    return {
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
            stepSize: 1,
            min: 0,
            max
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
    }
  }

}
