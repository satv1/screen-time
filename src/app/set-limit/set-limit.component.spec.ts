import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLimitComponent } from './set-limit.component';

describe('SetLimitComponent', () => {
  let component: SetLimitComponent;
  let fixture: ComponentFixture<SetLimitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetLimitComponent]
    });
    fixture = TestBed.createComponent(SetLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
