import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHomeComponent } from './parent-home.component';

describe('ParentHomeComponent', () => {
  let component: ParentHomeComponent;
  let fixture: ComponentFixture<ParentHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentHomeComponent]
    });
    fixture = TestBed.createComponent(ParentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
