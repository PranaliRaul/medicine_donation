import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNgoComponent } from './add-ngo.component';

describe('AddNgoComponent', () => {
  let component: AddNgoComponent;
  let fixture: ComponentFixture<AddNgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
