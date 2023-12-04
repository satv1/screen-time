import { Component } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';
import { CheckboxService } from '../checkbox.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  vid1: boolean = false;
  vid2: boolean = false;
  vid3: boolean = false;
  vid4: boolean = false;
  vid5: boolean = false;
  vid6: boolean = false;

  constructor(private checkboxService: CheckboxService,private router: Router) {}

  saveVid1() {
    this.checkboxService.saveVid1State(this.vid1);
  }

  saveVid2() {
    this.checkboxService.saveVid2State(this.vid2);
  }
  saveVid3() {
    this.checkboxService.saveVid3State(this.vid3);
  }
  saveVid4() {
    this.checkboxService.saveVid4State(this.vid4);
  }
  saveVid5() {
    this.checkboxService.saveVid5State(this.vid5);
  }
  saveVid6() {
    this.checkboxService.saveVid6State(this.vid6);
  }


  onSubmit(){
    this.router.navigate(['rating']);
  }
  back(){
    this.router.navigate(['parent-home'])
  }


}
