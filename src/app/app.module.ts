import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddBookComponent } from './servicesex/app/add-book/add-book.component';
import { AddReaderComponent } from './servicesex/app/add-reader/add-reader.component';
import { AppComponent } from './servicesex/app/app.component';
 
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './servicesex/app/dashboard/dashboard.component';
import { EditBookComponent } from './servicesex/app/edit-book/edit-book.component';
import { EditReaderComponent } from './servicesex/app/edit-reader/edit-reader.component';
import { LoggerService } from './servicesex/app/core/logger.service';
import { DataService } from './servicesex/app/core/data.service';
import { PlainLoggerService } from './servicesex/app/core/plain-logger.service';
import { dataServiceFactory } from './servicesex/app/core/data.service.factory';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // PlainLoggerService,
    // {provide: LoggerService, useExisting: PlainLoggerService},     
    // { provide: LoggerService, useValue:{
    //   log: (message:string) => console.log(`Message: ${message}`),
    //   error: (message:string) => console.log(`Message: ${message}`)
    // }},
    // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService]}
    LoggerService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
