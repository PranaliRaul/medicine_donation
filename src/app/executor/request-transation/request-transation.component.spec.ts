import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTransationComponent } from './request-transation.component';

describe('RequestTransationComponent', () => {
  let component: RequestTransationComponent;
  let fixture: ComponentFixture<RequestTransationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTransationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
