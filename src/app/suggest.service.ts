import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestService {
  private suggest: string = '';

  setSuggest(name: string) {
    this.suggest = name;
  }

  getSuggest() {
    return this.suggest;
  }
}
