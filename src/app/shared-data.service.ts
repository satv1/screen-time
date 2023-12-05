import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  isCellClicked: boolean = false;

  setCellClickedState(state: boolean) {
    this.isCellClicked = state;
  }

  getCellClickedState() {
    return this.isCellClicked;
  }
}