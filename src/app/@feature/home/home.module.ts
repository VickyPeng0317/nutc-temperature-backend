import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '@core/core.module';
import { FirstChartComponent } from './components/first-chart/first-chart.component';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { ChartHumidityComponent } from './components/chart-humidity/chart-humidity.component';
import { ChartTemperatureComponent } from './components/chart-temperature/chart-temperature.component';
import { ChartWaterCountComponent } from './components/chart-water-count/chart-water-count.component';
import { ChartTemperatureAndHumidityComponent } from './components/chart-temperature-and-humidity/chart-temperature-and-humidity.component';

@NgModule({
  declarations: [HomeComponent, FirstChartComponent, TemperatureChartComponent, ChartHumidityComponent, ChartTemperatureComponent, ChartWaterCountComponent, ChartTemperatureAndHumidityComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
