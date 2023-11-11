import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDeviceChildComponent } from './link-device-child.component';

describe('LinkDeviceChildComponent', () => {
  let component: LinkDeviceChildComponent;
  let fixture: ComponentFixture<LinkDeviceChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkDeviceChildComponent]
    });
    fixture = TestBed.createComponent(LinkDeviceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
