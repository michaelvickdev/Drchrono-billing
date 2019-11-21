import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStatementsComponent } from './patient-statements.component';

describe('PatientStatementsComponent', () => {
  let component: PatientStatementsComponent;
  let fixture: ComponentFixture<PatientStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
