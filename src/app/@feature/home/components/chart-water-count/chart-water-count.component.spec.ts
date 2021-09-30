import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWaterCountComponent } from './chart-water-count.component';

describe('ChartWaterCountComponent', () => {
  let component: ChartWaterCountComponent;
  let fixture: ComponentFixture<ChartWaterCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartWaterCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWaterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
