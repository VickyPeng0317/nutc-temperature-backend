import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoorPageComponent } from './home-door-page.component';

describe('HomeDoorPageComponent', () => {
  let component: HomeDoorPageComponent;
  let fixture: ComponentFixture<HomeDoorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDoorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDoorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
