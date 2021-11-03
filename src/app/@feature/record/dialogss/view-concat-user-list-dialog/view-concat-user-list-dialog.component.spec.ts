import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConcatUserListDialogComponent } from './view-concat-user-list-dialog.component';

describe('ViewConcatUserListDialogComponent', () => {
  let component: ViewConcatUserListDialogComponent;
  let fixture: ComponentFixture<ViewConcatUserListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConcatUserListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConcatUserListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
