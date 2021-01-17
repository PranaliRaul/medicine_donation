import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndonationsComponent } from './assigndonations.component';

describe('AssigndonationsComponent', () => {
  let component: AssigndonationsComponent;
  let fixture: ComponentFixture<AssigndonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigndonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
