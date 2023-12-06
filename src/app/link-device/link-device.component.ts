import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent {


  name: string = "";
  constructor(private router: Router, private dataService: DataService) { 
    this.dataService.setName(this.name);
  }


  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    this.dataService.setName(this.name);
    this.router.navigate(['parent-home'])
  }
  }