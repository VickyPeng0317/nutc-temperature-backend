import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartHoursComponent } from './home-chart-hours.component';

describe('HomeChartHoursComponent', () => {
  let component: HomeChartHoursComponent;
  let fixture: ComponentFixture<HomeChartHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
