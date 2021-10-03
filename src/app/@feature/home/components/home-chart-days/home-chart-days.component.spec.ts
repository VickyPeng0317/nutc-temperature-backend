import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartDaysComponent } from './home-chart-days.component';

describe('HomeChartDaysComponent', () => {
  let component: HomeChartDaysComponent;
  let fixture: ComponentFixture<HomeChartDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
