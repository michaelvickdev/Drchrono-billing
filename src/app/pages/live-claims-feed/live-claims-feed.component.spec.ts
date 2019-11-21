import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClaimsFeedComponent } from './live-claims-feed.component';

describe('LiveClaimsFeedComponent', () => {
  let component: LiveClaimsFeedComponent;
  let fixture: ComponentFixture<LiveClaimsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveClaimsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveClaimsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
