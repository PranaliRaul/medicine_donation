import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveListComponent } from './executive-list.component';

describe('ExecutiveListComponent', () => {
  let component: ExecutiveListComponent;
  let fixture: ComponentFixture<ExecutiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
