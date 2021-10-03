import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDeviceDialogComponent } from './modify-device-dialog.component';

describe('ModifyDeviceDialogComponent', () => {
  let component: ModifyDeviceDialogComponent;
  let fixture: ComponentFixture<ModifyDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDeviceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
