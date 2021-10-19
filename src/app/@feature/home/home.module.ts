import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '@core/core.module';
import { HomeChartDaysComponent } from './components/home-chart-days/home-chart-days.component';
import { HomeChartHoursComponent } from './components/home-chart-hours/home-chart-hours.component';
import { HomeUserListComponent } from './components/home-user-list/home-user-list.component';
import { HomeUserPercentComponent } from './components/home-user-percent/home-user-percent.component';
import { HomeDoorPageComponent } from './components/home-door-page/home-door-page.component';

@NgModule({
  declarations: [HomeComponent, HomeChartDaysComponent, HomeChartHoursComponent, HomeUserListComponent, HomeUserPercentComponent, HomeDoorPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
