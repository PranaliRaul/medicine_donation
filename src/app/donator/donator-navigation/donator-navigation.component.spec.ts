import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorNavigationComponent } from './donator-navigation.component';

describe('DonatorNavigationComponent', () => {
  let component: DonatorNavigationComponent;
  let fixture: ComponentFixture<DonatorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
