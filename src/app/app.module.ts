import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddButtonsComponent } from './add-buttons/add-buttons.component';
import { AddRengersComponent } from './add-rengers/add-rengers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonsComponent,
    AddRengersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
