import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ModulesPanelComponent } from './modules-panel/modules-panel.component';
import { WindowControlComponent } from './window-control/window-control.component';
import { ViewportComponent } from './viewport/viewport.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphsComponent,
    ModulesPanelComponent,
    WindowControlComponent,
    ViewportComponent,
    LeftbarComponent,
    RightbarComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
