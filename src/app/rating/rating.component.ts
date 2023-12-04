import { Component } from '@angular/core';
import { CheckboxService } from '../checkbox.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  vid1: boolean = false;
  vid2: boolean = false;
  vid3: boolean = false;
  vid4: boolean = false;
  vid5: boolean = false;
  vid6: boolean = false;


  constructor(private checkboxService: CheckboxService, private router: Router) {}

  ngOnInit() {
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

  back(){
    this.router.navigate(['content'])
  }
  onSubmit() {
    this.router.navigate(['parent-home'])
  }


}
