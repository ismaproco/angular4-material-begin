import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdSelectModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, 
    MdButtonModule,
    MdSelectModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
