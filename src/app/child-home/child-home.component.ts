import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {

  timeLimit: string = "";
  notify: boolean = false;


  constructor(private router: Router, private timeService: TimeService, private notifyService: NotifyService) {
    this.notifyService.notify$.subscribe((value) => {
      if (value) {
        this.navigateToNewPage();
      }
    });

  }
  ngOnInit() {
    this.getTimeLimit();
    
  }

  getTimeLimit() {
    this.timeLimit = this.timeService.getTimeLimit();
  }
  navigateToNewPage() {
    this.router.navigate(['take-break']);
  }



}
