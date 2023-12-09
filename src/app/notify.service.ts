import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  public notifySubject = new BehaviorSubject<boolean>(false);

  notify$ = this.notifySubject.asObservable();

  toggleNotification() {
    this.notifySubject.next(!this.notifySubject.value);
  }
}
