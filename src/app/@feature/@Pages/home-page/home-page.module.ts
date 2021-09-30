import { HomePageRoutingModule } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '@feature/home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomeModule
  ]
})
export class HomePageModule { }
