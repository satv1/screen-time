import { Component, Input } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.scss']
})
export class ParentHomeComponent {

  timeLimit: string = '';
  name: string = '';

  constructor(private router: Router, private notifyService: NotifyService, private timeService: TimeService, private dataService: DataService) {
  }

  ngOnInit() {
    this.getTimeLimit();
    this.getName();
  }

  getTimeLimit() {
    this.timeLimit = this.timeService.getTimeLimit();
  }

  getName() {
    this.name = this.dataService.getName();
  }

  notify() {
    this.notifyService.toggleNotification();
    this.router.navigate(['notified'])
  }
  setLimit() {
    this.router.navigate(['set-limit'])

    
  }

  setSuggestion(){
    this.router.navigate(['suggest'])

  }

  setContent(){
    this.router.navigate(['content'])

  }

  setSchedule(){
    this.router.navigate(['parent-schedule'])

  }

}
