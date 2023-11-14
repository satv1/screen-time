import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuggestService } from '../suggest.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent {

  suggest: string = '';



  constructor(private router: Router, private suggestService: SuggestService) {

    this.suggestService.setSuggest(this.suggest);
  }

  ngOnInit() {
    this.getSuggest();
  }

  getSuggest() {
    this.suggest = this.suggestService.getSuggest();
  }


  submitted = false;
  onSubmit() { this.submitted = true; 
    this.suggestService.setSuggest(this.suggest);
    this.router.navigate(['parent-home'])
  }

  back(){
    this.router.navigate(['parent-home'])
  }

  

}
