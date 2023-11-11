import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeLimit: string = '';

  setTimeLimit(time: string) {
    this.timeLimit = time;
  }

  getTimeLimit() {
    return this.timeLimit;
  }
}
