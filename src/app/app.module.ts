import { AuthModule } from './@auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from './@feature/@Layout/layout.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { zhTW } from 'date-fns/locale';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import {HttpClientModule} from '@angular/common/http';

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
    NbDateFnsDateModule.forRoot({
      format: 'yyyy/MM/dd',
    }),
    NbDatepickerModule.forRoot(),
    ChartsModule,
    AuthModule,
    HttpClientModule,
    NbDialogModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
