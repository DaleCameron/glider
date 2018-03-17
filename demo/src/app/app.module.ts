import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstanceManagerComponent } from './instance-manager/instance-manager.component';
import { InstanceLoginComponent } from './instance-manager/instance-login.component';


@NgModule({
  declarations: [
    AppComponent,
    InstanceManagerComponent,
    InstanceLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
