import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private cellColors: { [key: string]: string } = {};

  getColor(key: string): string {
    return this.cellColors[key] || ''; 
  }

  setColor(key: string, color: string): void {
    this.cellColors[key] = color; 
  }
}