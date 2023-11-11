import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeBreakComponent } from './take-break.component';

describe('TakeBreakComponent', () => {
  let component: TakeBreakComponent;
  let fixture: ComponentFixture<TakeBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeBreakComponent]
    });
    fixture = TestBed.createComponent(TakeBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
