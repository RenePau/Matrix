import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

//import {ConfirmationPopoverModule} from './popup/confirmationPopover.module';

import {DataService} from './data/dataservice';
import {TEST} from './data/dataservice';
import {Service} from './services/service';


import {ModelModule} from './model/model.module';
import {MatrixModule} from './views/matrix.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatrixModule
  ],
  providers: [ DataService, Service, { provide: TEST, useValue: 'false'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

