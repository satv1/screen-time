import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-set-limit',
  templateUrl: './set-limit.component.html',
  styleUrls: ['./set-limit.component.scss']
})
export class SetLimitComponent {


  timeLimit: string = "";


  constructor(private router: Router, private timeService: TimeService) {}

  submitted = false;
  onSubmit() { this.submitted = true; 
    this.router.navigate(['parent-home'])
    this.timeService.setTimeLimit(this.timeLimit);
  }

  back(){
    this.router.navigate(['parent-home'])
  }
  

}
