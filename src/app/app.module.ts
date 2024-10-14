import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Tab1Page } from './tab1/tab1.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,Tab1Page],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
