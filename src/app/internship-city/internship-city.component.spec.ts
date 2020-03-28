import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipCityComponent } from './internship-city.component';

describe('InternshipCityComponent', () => {
  let component: InternshipCityComponent;
  let fixture: ComponentFixture<InternshipCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
