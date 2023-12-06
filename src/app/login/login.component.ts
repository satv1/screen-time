import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  username: string = "";
  password: string = "";

  constructor(private router: Router) { }


  submitted = false;
  onSubmit() { this.submitted = true; 
    this.router.navigate(['user-type'])
  }

}