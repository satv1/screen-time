import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDeviceComponent } from './link-device.component';

describe('LinkDeviceComponent', () => {
  let component: LinkDeviceComponent;
  let fixture: ComponentFixture<LinkDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkDeviceComponent]
    });
    fixture = TestBed.createComponent(LinkDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
