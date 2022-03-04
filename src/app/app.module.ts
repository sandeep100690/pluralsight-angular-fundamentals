import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './servicesex/app/add-book/add-book.component';
import { AddReaderComponent } from './servicesex/app/add-reader/add-reader.component';
import { AppComponent } from './servicesex/app/app.component';
 
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './servicesex/app/dashboard/dashboard.component';
import { EditBookComponent } from './servicesex/app/edit-book/edit-book.component';
import { EditReaderComponent } from './servicesex/app/edit-reader/edit-reader.component';
import { LoggerService } from './servicesex/app/core/logger.service';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
