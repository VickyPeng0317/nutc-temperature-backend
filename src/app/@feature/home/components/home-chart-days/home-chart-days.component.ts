import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import { ChartType } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'home-chart-days',
  templateUrl: './home-chart-days.component.html',
  styleUrls: ['./home-chart-days.component.scss']
})
export class HomeChartDaysComponent implements OnInit, OnChanges {
  @Input()
  searchName: string = '';
  
  barChartType: ChartType = 'line';

  barChartOptions = {
    responsive: true,
    bezierCurve: false,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true
      }
    }
  };


  barChartLabels = ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07'];
  barChartData = [
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      label: '次數1',
      backgroundColor: 'rgb(174,218,247,0.5)',
      borderColor: '#36A2EB',
      fill: false
    },
    {
      data: [56, 58, 43, 45, 70, 72, 60],
      label: '次數2',
      backgroundColor: 'rgb(174,218,247,0.5)',
      borderColor: '#36A2EB',
      fill: false
    }
  ];
  c;
  constructor(
    private recordService: RecordService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getRecordListForStaff();
  }
  getRecordListForStaff() {
    const params = {
      searchName: this.searchName,
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
          return recordTime === time && +record.temperature > 37.3;
        }).length;
        return count;
      });
      this.barChartData[0].data = chartData;
    });
  }
  ngOnInit(): void {
    this.getRecordListForStaff();
    // const arr = ['國貿','會計','保金','企管','財稅','財金','應統','休閒'].map(name => {
    //   return {
    //     name,
    //     hotCount: 32 + Math.floor(Math.random()*(30)),
    //     coolCount: 20 + Math.floor(Math.random()*(30)),
    //     normalCount: 50 + Math.floor(Math.random()*(30))
    //   }
    // });
    // this.barChartLabels = arr.map(x => x.name);
    // const hotData = arr.map(x => x.hotCount);
    // const coolData = arr.map(x => x.coolCount);
    // const normalCount = arr.map(x => x.normalCount);
    // this.barChartData = [
    //   { data: hotData, label: '體溫過高', stack: 'a'},
    //   { data: coolData, label: '體溫過低', stack: 'a'},
    //   { data: normalCount, label: '體溫正常', stack: 'a'},
    // ]
  }

}
