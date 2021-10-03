import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserPercentComponent } from './home-user-percent.component';

describe('HomeUserPercentComponent', () => {
  let component: HomeUserPercentComponent;
  let fixture: ComponentFixture<HomeUserPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
