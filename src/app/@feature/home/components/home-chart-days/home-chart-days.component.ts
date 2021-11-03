import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import { environment } from '@environments/environment';
import { ChartOptions, ChartType } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'home-chart-days',
  templateUrl: './home-chart-days.component.html',
  styleUrls: ['./home-chart-days.component.scss']
})
export class HomeChartDaysComponent implements OnInit, OnChanges {
  barChartType: ChartType = 'line';
  @Input()
  isLoading = false;
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true
      }
    },
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
          labelString: '日期'
        }
      }]
    },
  };

  barChartLabels = ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07'];
  barChartData = [
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      label: '次數1',
      backgroundColor: 'rgb(174,218,247,0.5)',
      borderColor: '#36A2EB',
      pointBackgroundColor: '#36A2EB',
      pointBorderColor: '#36A2EB'
    }
  ];
  constructor(
    private recordService: RecordService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getRecordListForStaff();
  }
  getRecordListForStaff() {
    const params = {
      searchName: '',
      dateStart: moment().add(-7, 'days').format('YYYY/MM/DD 00:00:00'),
      dateEnd: moment().format('YYYY/MM/DD 23:59:59')
    };
    this.recordService.getRecordListForStaff(params).subscribe(res => {
      const recordList = res.data;
      const allDay = [... new Set(recordList.map(x => moment(x.createdTime).format('YYYY/MM/DD')))].sort();
      this.barChartLabels = allDay.map(x => moment(x).format('MM/DD'));
      const chartData = allDay.map(time => {
        const count = recordList.filter(record => {
          const recordTime = moment(record.createdTime).format('YYYY/MM/DD');
          return recordTime === time && +record.temperature > environment.HOT;
        }).length;
        return count;
      });
      this.barChartData[0].data = chartData;
    });
  }
  ngOnInit(): void {
    this.getRecordListForStaff();
  }

}
