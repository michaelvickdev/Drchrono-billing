import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmatchedErasComponent } from './unmatched-eras.component';

describe('UnmatchedErasComponent', () => {
  let component: UnmatchedErasComponent;
  let fixture: ComponentFixture<UnmatchedErasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmatchedErasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmatchedErasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
