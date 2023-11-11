import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent {


  name: string = "";
  constructor(private router: Router) { 
    // this.userService.isParent$.subscribe((value) => {
    //   this.isParent = value;
    // });
    // this.userService.isChild$.subscribe((value) => {
    //   this.isChild = value;
    // });
  }


  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    this.router.navigate(['user-type'])
  }
  }

