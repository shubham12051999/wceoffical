import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTourCityComponent } from './study-tour-city.component';

describe('StudyTourCityComponent', () => {
  let component: StudyTourCityComponent;
  let fixture: ComponentFixture<StudyTourCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyTourCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyTourCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
