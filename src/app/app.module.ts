import { AuthModule } from './@auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbTimepickerModule, NB_TIME_PICKER_CONFIG } from '@nebular/theme';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from './@feature/@Layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { IMqttServiceOptions } from 'ngx-mqtt';
import {HttpClientModule} from '@angular/common/http';
import localeZhtw from '@angular/common/locales/zh-Hant';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeZhtw, 'zhTw');
const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: true,
  url: 'tcp://163.17.136.70:1883'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbDatepickerModule.forRoot(),
    ChartsModule,
    AuthModule,
    HttpClientModule,
    NbDialogModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zhTw' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
