import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullDonationComponent } from './sucessfull-donation.component';

describe('SucessfullDonationComponent', () => {
  let component: SucessfullDonationComponent;
  let fixture: ComponentFixture<SucessfullDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfullDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfullDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
