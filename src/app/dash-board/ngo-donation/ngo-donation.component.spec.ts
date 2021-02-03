import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoDonationComponent } from './ngo-donation.component';

describe('NgoDonationComponent', () => {
  let component: NgoDonationComponent;
  let fixture: ComponentFixture<NgoDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
