import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElabComponent } from './elab.component';

describe('ElabComponent', () => {
  let component: ElabComponent;
  let fixture: ComponentFixture<ElabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
