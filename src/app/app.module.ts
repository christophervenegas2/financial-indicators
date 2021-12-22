import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {environment} from '../environments/environment';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { DialogValueIndicatorComponent } from './dialog-value-indicator/dialog-value-indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DialogValueIndicatorComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      enableSourceMaps: true,
      disableConsoleLogging: environment.production
    }),
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ChartsComponent,
    DialogValueIndicatorComponent,
    FooterComponent
  ]
})
export class AppModule { }
