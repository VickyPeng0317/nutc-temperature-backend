import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserListComponent } from './home-user-list.component';

describe('HomeUserListComponent', () => {
  let component: HomeUserListComponent;
  let fixture: ComponentFixture<HomeUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
