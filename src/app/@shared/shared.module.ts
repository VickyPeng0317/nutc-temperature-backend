import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from './modules/nebular.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbMomentDateModule } from '@nebular/moment';
import { NbSecurityModule } from '@nebular/security';
import { NbCardModule, NbButtonModule, NbInputModule, NbActionsModule, NbTooltipModule, NbIconModule, NbListModule, NbUserModule, NbAccordionModule, NbSelectModule, NbCheckboxModule, NbCalendarModule, NbDatepickerModule, NbMenuModule, NbTabsetModule, NbAlertModule, NbPopoverModule, NbFormFieldModule, NbRadioModule, NbToggleModule, NbAutocompleteModule, NbLayoutModule, NbSearchModule, NbSidebarModule, NbContextMenuModule } from '@nebular/theme';
import { zhTW } from 'date-fns/locale';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { RequiredFormDirective } from './directives/required-form.directive';
import { ChartsModule } from 'ng2-charts';

const NB_MODEL = [
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbActionsModule,
  NbTooltipModule,
  NbIconModule,
  NbListModule,
  NbUserModule,
  NbAccordionModule,
  NbSelectModule,
  NbCheckboxModule,
  NbCalendarModule,
  NbDatepickerModule,
  NbMenuModule,
  NbTabsetModule,
  NbMomentDateModule,
  NbAlertModule,
  NbPopoverModule,
  NbFormFieldModule,
  NbRadioModule,
  NbToggleModule,
  NbAutocompleteModule,
  NbLayoutModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbEvaIconsModule
];

const DIRECTIVES = [
  RequiredFormDirective
];

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    NebularModule,
    FlexLayoutModule,
    ChartsModule,
    ...NB_MODEL
  ],
  exports: [
    NebularModule,
    FlexLayoutModule,
    ChartsModule,
    ...NB_MODEL,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
