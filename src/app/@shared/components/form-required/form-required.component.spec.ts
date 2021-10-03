import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRequiredComponent } from './form-required.component';

describe('FormRequiredComponent', () => {
  let component: FormRequiredComponent;
  let fixture: ComponentFixture<FormRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
