import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularResizeEventModule } from 'angular-resize-event';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SVGComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    SVGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularResizeEventModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
