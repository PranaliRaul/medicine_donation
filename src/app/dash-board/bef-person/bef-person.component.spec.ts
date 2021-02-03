import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BefPersonComponent } from './bef-person.component';

describe('BefPersonComponent', () => {
  let component: BefPersonComponent;
  let fixture: ComponentFixture<BefPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BefPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BefPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
