import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from './modules/nebular.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbMomentDateModule } from '@nebular/moment';
import { NbSecurityModule } from '@nebular/security';
import { NbCardModule, NbButtonModule, NbInputModule, NbActionsModule, NbTooltipModule, NbIconModule, NbListModule, NbUserModule, NbAccordionModule, NbSelectModule, NbCheckboxModule, NbCalendarModule, NbDatepickerModule, NbMenuModule, NbTabsetModule, NbAlertModule, NbPopoverModule, NbFormFieldModule, NbRadioModule, NbToggleModule, NbAutocompleteModule, NbLayoutModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbTimepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { RequiredFormDirective } from './directives/required-form.directive';
import { ChartsModule } from 'ng2-charts';
import { FormRequiredComponent } from './components/form-required/form-required.component';
import { QRCodeModule } from 'angularx-qrcode';

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
  NbEvaIconsModule,
  NbTimepickerModule
];

const DIRECTIVES = [
  RequiredFormDirective
];

const COMPONENTS = [
  FormRequiredComponent
];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [
    NbDateFnsDateModule.forChild({}),
    CommonModule,
    NebularModule,
    FlexLayoutModule,
    ChartsModule,
    QRCodeModule,
    ...NB_MODEL
  ],
  exports: [
    NebularModule,
    FlexLayoutModule,
    ChartsModule,
    QRCodeModule,
    ...NB_MODEL,
    ...DIRECTIVES,
    ...COMPONENTS,
  ]
})
export class SharedModule { }
