import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRecordDialogComponent } from './modify-record-dialog.component';

describe('ModifyRecordDialogComponent', () => {
  let component: ModifyRecordDialogComponent;
  let fixture: ComponentFixture<ModifyRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRecordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
