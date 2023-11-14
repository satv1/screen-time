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
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { NotifiedComponent } from './notified/notified.component';
import { SetLimitComponent } from './set-limit/set-limit.component';
import { TakeBreakComponent } from './take-break/take-break.component';
import { SuggestComponent } from './suggest/suggest.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTypeComponent,
    LinkDeviceComponent,
    LinkDeviceChildComponent,
    ChildHomeComponent,
    HeaderComponent,
    ParentHomeComponent,
    NotifiedComponent,
    SetLimitComponent,
    TakeBreakComponent,
    SuggestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
