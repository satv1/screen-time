import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedComponent } from './notified.component';

describe('NotifiedComponent', () => {
  let component: NotifiedComponent;
  let fixture: ComponentFixture<NotifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifiedComponent]
    });
    fixture = TestBed.createComponent(NotifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
