import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyToursCityComponent } from './study-tours-city.component';

describe('StudyToursCityComponent', () => {
  let component: StudyToursCityComponent;
  let fixture: ComponentFixture<StudyToursCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyToursCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyToursCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
