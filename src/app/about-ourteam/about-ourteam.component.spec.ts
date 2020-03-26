import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurteamComponent } from './about-ourteam.component';

describe('AboutOurteamComponent', () => {
  let component: AboutOurteamComponent;
  let fixture: ComponentFixture<AboutOurteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
