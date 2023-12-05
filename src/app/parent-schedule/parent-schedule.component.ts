import { Component, Input } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { DataService } from '../data.service';
import { ChangeDetectorRef } from '@angular/core';
//service testing
import { ColorService } from '../color.service';

@Component({
  selector: 'app-parent-schedule',
  templateUrl: './parent-schedule.component.html',
  styleUrls: ['./parent-schedule.component.scss']
})
export class ParentScheduleComponent {

  timeLimit: string = '';
  name: string = '';
  isCellClicked: boolean = false;
  //isDragging: boolean = false;

  constructor(private  router: Router,  public colorService: ColorService, private cdr: ChangeDetectorRef, private notifyService: NotifyService, private timeService: TimeService, private dataService: DataService) {
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

  back() {
    this.router.navigate(['parent-home']);
  }

  color(event: Event, key: string) {
    const element = event.target as HTMLElement;

    if (element) {
       //Toggle the 'cell-clicked' class
      this.isCellClicked = !this.isCellClicked;

      // Add or remove the class based on the toggle state
      if (this.isCellClicked) {
        const selectedColor = 'green'; // Change this to the color you want
        element.classList.add('cell-clicked');
        this.colorService.setColor(key, selectedColor);
      } else {
        element.classList.remove('cell-clicked');
        this.colorService.setColor(key, '');
      }

    }
   
    this.cdr.detectChanges();
  }

   
}
