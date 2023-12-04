import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CheckboxService {
  private vid1StateSubject = new BehaviorSubject<boolean>(false);
  private vid2StateSubject = new BehaviorSubject<boolean>(false);
  private vid3StateSubject = new BehaviorSubject<boolean>(false);
  private vid4StateSubject = new BehaviorSubject<boolean>(false);
  private vid5StateSubject = new BehaviorSubject<boolean>(false);
  private vid6StateSubject = new BehaviorSubject<boolean>(false);

  vid1State$ = this.vid1StateSubject.asObservable();
  vid2State$ = this.vid2StateSubject.asObservable();
  vid3State$ = this.vid3StateSubject.asObservable();
  vid4State$ = this.vid4StateSubject.asObservable();
  vid5State$ = this.vid5StateSubject.asObservable();
  vid6State$ = this.vid6StateSubject.asObservable();


  saveVid1State(state: boolean) {
    this.vid1StateSubject.next(state);
  }

  getVid1State(): boolean {
    return this.vid1StateSubject.value;
  }

  saveVid2State(state: boolean) {
    this.vid2StateSubject.next(state);
  }

  getVid2State(): boolean {
    return this.vid2StateSubject.value;
  }
  
  saveVid3State(state: boolean) {
    this.vid3StateSubject.next(state);
  }

  getVid3State(): boolean {
    return this.vid3StateSubject.value;
  }

  saveVid4State(state: boolean) {
    this.vid4StateSubject.next(state);
  }

  getVid4State(): boolean {
    return this.vid4StateSubject.value;
  }

  saveVid5State(state: boolean) {
    this.vid5StateSubject.next(state);
  }

  getVid5State(): boolean {
    return this.vid5StateSubject.value;
  }

  saveVid6State(state: boolean) {
    this.vid6StateSubject.next(state);
  }

  getVid6State(): boolean {
    return this.vid6StateSubject.value;
  }
}
