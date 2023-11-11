import { Component, Input } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.scss']
})
export class ParentHomeComponent {

  //@Input() name: string = "";

  constructor(private router: Router, private notifyService: NotifyService) {}

  notify() {
    this.notifyService.toggleNotification();
    this.router.navigate(['notified'])
  }
  setLimit() {
    
  }


}
