import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbMomentDateModule } from '@nebular/moment';
import { NbSecurityModule } from '@nebular/security';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbAutocompleteModule, NbButtonModule, NbCalendarModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbPopoverModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbToggleModule, NbTooltipModule, NbUserModule } from '@nebular/theme';

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

@NgModule({
  exports: [...NB_MODEL]
})
export class NebularModule { }
