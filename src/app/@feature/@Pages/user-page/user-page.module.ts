import { UserPageRoutingModule } from './user-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '@feature/user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    UserModule
  ]
})
export class UserPageModule { }
