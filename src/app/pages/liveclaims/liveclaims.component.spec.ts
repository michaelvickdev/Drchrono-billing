import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveclaimsComponent } from './liveclaims.component';

describe('LiveclaimsComponent', () => {
  let component: LiveclaimsComponent;
  let fixture: ComponentFixture<LiveclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
