import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTemperatureAndHumidityComponent } from './chart-temperature-and-humidity.component';

describe('ChartTemperatureAndHumidityComponent', () => {
  let component: ChartTemperatureAndHumidityComponent;
  let fixture: ComponentFixture<ChartTemperatureAndHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTemperatureAndHumidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTemperatureAndHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
