import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDonationDetailComponent } from './medicine-donation-detail.component';

describe('MedicineDonationDetailComponent', () => {
  let component: MedicineDonationDetailComponent;
  let fixture: ComponentFixture<MedicineDonationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineDonationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDonationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
