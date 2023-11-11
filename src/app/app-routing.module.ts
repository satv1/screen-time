import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { LinkDeviceChildComponent } from './link-device-child/link-device-child.component';
import { ChildHomeComponent } from './child-home/child-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: 'link-device', component: LinkDeviceComponent },
  { path: 'link-device-child', component: LinkDeviceChildComponent },
  { path: 'child-home', component: ChildHomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
