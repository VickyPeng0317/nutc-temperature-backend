import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordManagePageComponent } from '@feature/record/components/record-manage-page/record-manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecordManagePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordPageRoutingModule { }
