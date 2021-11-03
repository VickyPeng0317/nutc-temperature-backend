import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartCollegeCountComponent } from './home-chart-college-count.component';

describe('HomeChartCollegeCountComponent', () => {
  let component: HomeChartCollegeCountComponent;
  let fixture: ComponentFixture<HomeChartCollegeCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartCollegeCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartCollegeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
