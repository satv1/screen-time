import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { NotifyService } from '../notify.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {

  timeLimit: string = "";
  notify: boolean = false;
  name: string = '';


  constructor(private router: Router, private timeService: TimeService, private notifyService: NotifyService, private dataService: DataService) {
    this.notifyService.notify$.subscribe((value) => {
      if (value) {
        this.navigateToNewPage();
      }
    });

  }
  ngOnInit() {
    this.getTimeLimit();
    this.getName();
    
  }

  getName() {
    this.name = this.dataService.getName();
  }

  getTimeLimit() {
    this.timeLimit = this.timeService.getTimeLimit();
  }
  navigateToNewPage() {
    this.router.navigate(['take-break']);
  }



}
