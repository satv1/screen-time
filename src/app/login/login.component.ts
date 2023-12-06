import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../credentials.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  username: string = '';
  password: string = '';

  constructor(private router: Router, private credService: CredentialsService) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.credService.isValidUser(this.username, this.password)) {
      this.router.navigate(['user-type']);
    } else {
      console.log('Invalid username or password');
    }
  }

  create() {
    this.router.navigate(['create-account']);
  }

}
