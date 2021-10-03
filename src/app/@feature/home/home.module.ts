import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '@core/core.module';
import { ChartHumidityComponent } from './components/chart-humidity/chart-humidity.component';
import { ChartTemperatureComponent } from './components/chart-temperature/chart-temperature.component';
import { ChartWaterCountComponent } from './components/chart-water-count/chart-water-count.component';
import { ChartTemperatureAndHumidityComponent } from './components/chart-temperature-and-humidity/chart-temperature-and-humidity.component';
import { HomeChartDaysComponent } from './components/home-chart-days/home-chart-days.component';
import { HomeChartHoursComponent } from './components/home-chart-hours/home-chart-hours.component';
import { HomeUserListComponent } from './components/home-user-list/home-user-list.component';
import { HomeUserPercentComponent } from './components/home-user-percent/home-user-percent.component';

@NgModule({
  declarations: [HomeComponent, ChartHumidityComponent, ChartTemperatureComponent, ChartWaterCountComponent, ChartTemperatureAndHumidityComponent, HomeChartDaysComponent, HomeChartHoursComponent, HomeUserListComponent, HomeUserPercentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
