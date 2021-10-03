import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagePageComponent } from './device-manage-page.component';

describe('DeviceManagePageComponent', () => {
  let component: DeviceManagePageComponent;
  let fixture: ComponentFixture<DeviceManagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceManagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
