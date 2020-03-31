import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyToursComponent } from './study-tours.component';

describe('StudyToursComponent', () => {
  let component: StudyToursComponent;
  let fixture: ComponentFixture<StudyToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
