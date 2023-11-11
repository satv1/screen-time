import { Component, Input } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.scss']
})
export class ParentHomeComponent {

  //@Input() name: string = "";
  timeLimit: string = '';


  constructor(private router: Router, private notifyService: NotifyService, private timeService: TimeService) {}

  ngOnInit() {
    this.getTimeLimit();
  }

  getTimeLimit() {
    this.timeLimit = this.timeService.getTimeLimit();
  }

  notify() {
    this.notifyService.toggleNotification();
    this.router.navigate(['notified'])
  }
  setLimit() {
    this.router.navigate(['set-limit'])

    
  }


}
