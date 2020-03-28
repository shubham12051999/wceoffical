import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElabLocationsComponent } from './elab-locations.component';

describe('ElabLocationsComponent', () => {
  let component: ElabLocationsComponent;
  let fixture: ComponentFixture<ElabLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElabLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElabLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
