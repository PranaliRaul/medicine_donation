import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoMedRequestComponent } from './ngo-med-request.component';

describe('NgoMedRequestComponent', () => {
  let component: NgoMedRequestComponent;
  let fixture: ComponentFixture<NgoMedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoMedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoMedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
