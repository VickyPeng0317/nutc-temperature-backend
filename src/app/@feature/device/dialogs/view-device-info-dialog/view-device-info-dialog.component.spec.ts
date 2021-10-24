import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeviceInfoDialogComponent } from './view-device-info-dialog.component';

describe('ViewDeviceInfoDialogComponent', () => {
  let component: ViewDeviceInfoDialogComponent;
  let fixture: ComponentFixture<ViewDeviceInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeviceInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeviceInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
