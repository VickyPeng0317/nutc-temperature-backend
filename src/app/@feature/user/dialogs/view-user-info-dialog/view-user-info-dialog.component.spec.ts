import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserInfoDialogComponent } from './view-user-info-dialog.component';

describe('ViewUserInfoDialogComponent', () => {
  let component: ViewUserInfoDialogComponent;
  let fixture: ComponentFixture<ViewUserInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
