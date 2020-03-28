import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTermsComponent } from './about-terms.component';

describe('AboutTermsComponent', () => {
  let component: AboutTermsComponent;
  let fixture: ComponentFixture<AboutTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
