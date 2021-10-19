import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDoorPageComponent } from '@feature/home/components/home-door-page/home-door-page.component';
import { HomeComponent } from '@feature/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'door',
    component: HomeDoorPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
