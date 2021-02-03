import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationMadeComponent } from './donation-made.component';

describe('DonationMadeComponent', () => {
  let component: DonationMadeComponent;
  let fixture: ComponentFixture<DonationMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
