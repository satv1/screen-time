import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent {
  constructor(private router: Router, private userService: UserService) { }

  isParent() {
    this.userService.setIsParent(true);
    this.router.navigate(['link-device'])
  }

  isChild() {
    this.userService.setIsChild(true);
    this.router.navigate(['link-device-child'])
  }



}
