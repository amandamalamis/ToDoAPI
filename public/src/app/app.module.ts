import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      ///add your personal API key information here:
      apiKey: 'XXXX'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
