import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notified',
  templateUrl: './notified.component.html',
  styleUrls: ['./notified.component.scss']
})
export class NotifiedComponent {

  constructor(private router: Router, private notifyService: NotifyService) {}

  submitted = false;
  onSubmit() { this.submitted = true; 
    this.router.navigate(['parent-home'])
  }
}
