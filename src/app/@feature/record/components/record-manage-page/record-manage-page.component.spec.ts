import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordManagePageComponent } from './record-manage-page.component';

describe('RecordManagePageComponent', () => {
  let component: RecordManagePageComponent;
  let fixture: ComponentFixture<RecordManagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordManagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
