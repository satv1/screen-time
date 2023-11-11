import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserTypeComponent } from './user-type/user-type.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { LinkDeviceChildComponent } from './link-device-child/link-device-child.component';
import { ChildHomeComponent } from './child-home/child-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTypeComponent,
    LinkDeviceComponent,
    LinkDeviceChildComponent,
    ChildHomeComponent
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
