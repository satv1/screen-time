import { Component, Input } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { DataService } from '../data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent-schedule',
  templateUrl: './parent-schedule.component.html',
  styleUrls: ['./parent-schedule.component.scss']
})
export class ParentScheduleComponent {

  timeLimit: string = '';
  name: string = '';
  isCellClicked: boolean = false;

  constructor(private cdr: ChangeDetectorRef, router: Router, private notifyService: NotifyService, private timeService: TimeService, private dataService: DataService) {
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

  color(event: Event) {
    const element = event.target as HTMLElement;

    if (element) {
      // Toggle the 'cell-clicked' class
      this.isCellClicked = !this.isCellClicked;

      // Add or remove the class based on the toggle state
      if (this.isCellClicked) {
        element.classList.add('cell-clicked');
      } else {
        element.classList.remove('cell-clicked');
      }
    }
    this.cdr.detectChanges();
  }
}
