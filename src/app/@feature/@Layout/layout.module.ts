import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontMenuComponent } from './components/front-menu/front-menu.component';
import { FrontHeaderComponent } from './components/front-header/front-header.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    FrontHeaderComponent,
    FrontMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
