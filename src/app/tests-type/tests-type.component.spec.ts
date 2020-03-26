import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsTypeComponent } from './tests-type.component';

describe('TestsTypeComponent', () => {
  let component: TestsTypeComponent;
  let fixture: ComponentFixture<TestsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
