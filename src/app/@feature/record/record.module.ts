import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordManagePageComponent } from './components/record-manage-page/record-manage-page.component';
import { ModifyRecordDialogComponent } from './dialogss/modify-record-dialog/modify-record-dialog.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { NebularModule } from '@shared/modules/nebular.module';



@NgModule({
  declarations: [RecordManagePageComponent, ModifyRecordDialogComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class RecordModule { }
