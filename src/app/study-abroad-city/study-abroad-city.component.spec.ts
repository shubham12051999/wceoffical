import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAbroadCityComponent } from './study-abroad-city.component';

describe('StudyAbroadCityComponent', () => {
  let component: StudyAbroadCityComponent;
  let fixture: ComponentFixture<StudyAbroadCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyAbroadCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAbroadCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
