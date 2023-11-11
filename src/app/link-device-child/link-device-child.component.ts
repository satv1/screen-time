import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-device-child',
  templateUrl: './link-device-child.component.html',
  styleUrls: ['./link-device-child.component.scss']
})
export class LinkDeviceChildComponent {

  name: string = "";

  constructor(private router: Router) { }

  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    this.router.navigate(['child-home'])
  }


}
