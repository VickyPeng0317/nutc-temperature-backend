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
import { HomeChartCollegeCountComponent } from './components/home-chart-college-count/home-chart-college-count.component';
import { HomeChartDepartmentCountComponent } from './components/home-chart-department-count/home-chart-department-count.component';
import { HomeChartDoorCountComponent } from './components/home-chart-door-count/home-chart-door-count.component';

@NgModule({
  declarations: [HomeComponent, HomeChartDaysComponent, HomeChartHoursComponent, HomeUserListComponent, HomeUserPercentComponent, HomeDoorPageComponent, HomeChartCollegeCountComponent, HomeChartDepartmentCountComponent, HomeChartDoorCountComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
