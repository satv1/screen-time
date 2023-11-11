import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-take-break',
  templateUrl: './take-break.component.html',
  styleUrls: ['./take-break.component.scss']
})
export class TakeBreakComponent {

  constructor(private router: Router){}


  submitted = false;
  onSubmit() { this.submitted = true; 
    this.router.navigate(['child-home'])
  }

}
