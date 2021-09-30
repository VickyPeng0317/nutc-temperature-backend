import { SharedModule } from './../@shared/shared.module';
import { CoreModule } from './../@core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
