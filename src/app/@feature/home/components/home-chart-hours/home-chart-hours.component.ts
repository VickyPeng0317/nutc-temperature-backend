import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo } from '@core/services/record.service';
import { environment } from '@environments/environment';
import { ChartType } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'home-chart-hours',
  templateUrl: './home-chart-hours.component.html',
  styleUrls: ['./home-chart-hours.component.scss']
})
export class HomeChartHoursComponent implements OnInit, OnChanges {
  @Input()
  recordList: IRecordInfo[] = [];
  @Input()
  isLoading = false;
  barChartType: ChartType = 'bar';

  barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '人數'
        },
        display: true,
        ticks: {
          min: 0
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: '時間'
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

  barChartLegend = false;

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
    if (!changes?.recordList?.currentValue) {
      return;
    }
    this.generateChart();
  }

  ngOnInit(): void {
    
  }

  generateChart() {
    const allTime = [... new Set(
      this.recordList.map(x => moment(x.createdTime).format('HH:00'))
    )].sort();
    const chartData = allTime.map(time => {
      const count = this.recordList.filter(record => {
        const recordTime = moment(record.createdTime).format('HH:00');
        return recordTime === time && +record.temperature > environment.HOT;
      }).length;
      return count;
    });
    this.barChartLabels = allTime;
    this.barChartData[0].data = chartData;
  }

}
