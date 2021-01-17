import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsucessfullDonationComponent } from './unsucessfull-donation.component';

describe('UnsucessfullDonationComponent', () => {
  let component: UnsucessfullDonationComponent;
  let fixture: ComponentFixture<UnsucessfullDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsucessfullDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsucessfullDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
