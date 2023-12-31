import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../notify.service';
import { SuggestService } from '../suggest.service';



@Component({
  selector: 'app-take-break',
  templateUrl: './take-break.component.html',
  styleUrls: ['./take-break.component.scss']
})
export class TakeBreakComponent {

  constructor(private router: Router, private notifyService: NotifyService, private suggestService: SuggestService){}

  suggest: string = '';
  submitted = false;
  onContinue() { 
    this.submitted = true; 
    this.notifyService.toggleNotification();
    this.router.navigate(['child-home'])
  }





  ngOnInit() {
    this.getSuggest();
  }

  getSuggest() {
    this.suggest = this.suggestService.getSuggest();
  }






}
