import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordModule } from '@feature/record/record.module';
import { RecordPageRoutingModule } from './record-page-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecordPageRoutingModule,
    RecordModule,
  ]
})
export class RecordPageModule { }
