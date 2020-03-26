import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElabInfoComponent } from './elab-info.component';

describe('ElabInfoComponent', () => {
  let component: ElabInfoComponent;
  let fixture: ComponentFixture<ElabInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElabInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
