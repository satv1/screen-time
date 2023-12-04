import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { NotifyService } from '../notify.service';
import { DataService } from '../data.service';
import { CheckboxService } from '../checkbox.service';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {



  timeLimit: string = "";
  notify: boolean = false;
  name: string = '';
  vid1: boolean = false;
  vid2: boolean = false;
  vid3: boolean = false;
  vid4: boolean = false;
  vid5: boolean = false;
  vid6: boolean = false;


  constructor(private router: Router, private timeService: TimeService, private notifyService: NotifyService, private dataService: DataService, private checkboxService: CheckboxService) {
    this.notifyService.notify$.subscribe((value) => {
      if (value) {
        this.navigateToNewPage();
      }
    });

  }


  ngOnInit() {
    this.getTimeLimit();
    this.getName();
    this.checkboxService.vid1State$.subscribe((state) => {
      this.vid1 = state;
    });
    this.checkboxService.vid2State$.subscribe((state) => {
      this.vid2 = state;
    });
    this.checkboxService.vid3State$.subscribe((state) => {
      this.vid3 = state;
    });
    this.checkboxService.vid4State$.subscribe((state) => {
      this.vid4 = state;
    });
    this.checkboxService.vid5State$.subscribe((state) => {
      this.vid5 = state;
    });
    this.checkboxService.vid6State$.subscribe((state) => {
      this.vid6 = state;
    });
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
