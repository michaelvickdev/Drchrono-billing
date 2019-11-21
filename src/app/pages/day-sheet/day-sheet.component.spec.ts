import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySheetComponent } from './day-sheet.component';

describe('DaySheetComponent', () => {
  let component: DaySheetComponent;
  let fixture: ComponentFixture<DaySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
