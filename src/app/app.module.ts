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
    AngularResizeEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
