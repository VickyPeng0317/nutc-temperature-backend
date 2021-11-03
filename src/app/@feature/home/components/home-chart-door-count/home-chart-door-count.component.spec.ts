import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartDoorCountComponent } from './home-chart-door-count.component';

describe('HomeChartDoorCountComponent', () => {
  let component: HomeChartDoorCountComponent;
  let fixture: ComponentFixture<HomeChartDoorCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartDoorCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartDoorCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
