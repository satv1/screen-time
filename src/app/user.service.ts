import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isParent = new BehaviorSubject<boolean>(false);
  isParent$ = this.isParent.asObservable();
  setIsParent(value: boolean) {
    this.isParent.next(value);
  }

  private isChild = new BehaviorSubject<boolean>(false);
  isChild$ = this.isChild.asObservable();
  setIsChild(value: boolean) {
    this.isChild.next(value);
  }

  constructor() { }
}
