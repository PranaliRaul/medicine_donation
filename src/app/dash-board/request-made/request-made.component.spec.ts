import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMadeComponent } from './request-made.component';

describe('RequestMadeComponent', () => {
  let component: RequestMadeComponent;
  let fixture: ComponentFixture<RequestMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
