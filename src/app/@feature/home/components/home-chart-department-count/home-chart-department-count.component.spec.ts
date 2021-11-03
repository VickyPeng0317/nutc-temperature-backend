import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartDepartmentCountComponent } from './home-chart-department-count.component';

describe('HomeChartDepartmentCountComponent', () => {
  let component: HomeChartDepartmentCountComponent;
  let fixture: ComponentFixture<HomeChartDepartmentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartDepartmentCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartDepartmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
