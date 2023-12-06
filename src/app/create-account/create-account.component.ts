import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private credService: CredentialsService) { }

  createAccount() { 
    this.credService.saveUserInfo(this.username, this.password, this.isParent, this.linkedDevice);
    this.router.navigate(['user-type'])
  }
  login() { 
    this.router.navigate(['login'])
  }

  isParent: boolean = false;
  linkedDevice: string = '';



}
