import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserDialogComponent } from './modify-user-dialog.component';

describe('ModifyUserDialogComponent', () => {
  let component: ModifyUserDialogComponent;
  let fixture: ComponentFixture<ModifyUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
