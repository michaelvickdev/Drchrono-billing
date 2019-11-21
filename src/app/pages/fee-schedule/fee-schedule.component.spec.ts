import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeScheduleComponent } from './fee-schedule.component';

describe('FeeScheduleComponent', () => {
  let component: FeeScheduleComponent;
  let fixture: ComponentFixture<FeeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
