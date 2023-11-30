import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { LinkDeviceChildComponent } from './link-device-child/link-device-child.component';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { NotifiedComponent } from './notified/notified.component';
import { SetLimitComponent } from './set-limit/set-limit.component';
import { TakeBreakComponent } from './take-break/take-break.component';
import { SuggestComponent } from './suggest/suggest.component';
import { ContentComponent } from './content/content.component';
import { RatingComponent } from './rating/rating.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: 'link-device', component: LinkDeviceComponent },
  { path: 'link-device-child', component: LinkDeviceChildComponent },
  { path: 'child-home', component: ChildHomeComponent },
  { path: 'parent-home', component: ParentHomeComponent },
  { path: 'notified', component: NotifiedComponent },
  { path: 'set-limit', component: SetLimitComponent },
  { path: 'take-break', component: TakeBreakComponent },
  { path: 'suggest', component: SuggestComponent },
  { path: 'content', component: ContentComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'nav-bar', component: NavBarComponent }
  { path: 'parent-schedule', component: ParentScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
