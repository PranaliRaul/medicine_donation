import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonavigationComponent } from './ngonavigation.component';

describe('NgonavigationComponent', () => {
  let component: NgonavigationComponent;
  let fixture: ComponentFixture<NgonavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgonavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgonavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
