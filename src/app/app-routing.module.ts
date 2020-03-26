import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from "./contactus/contactus.component";
import { ElabComponent } from "./elab/elab.component";
import { FAQSComponent } from "./faqs/faqs.component";
import { HomeComponent } from "./home/home.component";
import { InternshipComponent } from "./internship/internship.component";
import { StudyAbroadComponent } from "./study-abroad/study-abroad.component";
import { StudyToursComponent } from "./study-tours/study-tours.component";
import { TestsComponent } from "./tests/tests.component";
import { StudyTourCityComponent } from "./study-tour-city/study-tour-city.component";
import { InternshipCityComponent } from "./internship-city/internship-city.component";
import { StudyAbroadCityComponent } from "./study-abroad-city/study-abroad-city.component";
import { TestsTypeComponent } from "./tests-type/tests-type.component";
import { ElabsInfoComponent } from "./elabs-info/elabs-info.component";
import { AboutGalleryComponent } from "./about-gallery/about-gallery.component";
import { AboutOurteamComponent } from "./about-ourteam/about-ourteam.component";
import { AboutTermsComponent } from "./about-terms/about-terms.component";
import { ElabLocationsComponent } from "./elab-locations/elab-locations.component";

const routes: Routes = [
  {
    path : 'Home',
    component: HomeComponent
  },
  {
    path : 'Tests',
    component: TestsComponent
  },
  {
    path : 'StudyAbroad',
    component: StudyAbroadComponent
  },
  {
    path : 'StudyTour',
    component: StudyToursComponent
  },
  {
    path : 'Internship',
    component: InternshipComponent
  },
  {
    path : 'ELab',
    component: ElabComponent
  },
  {
    path : 'Contact',
    component: ContactusComponent
  },
  {
    path : 'FAQS',
    component: FAQSComponent
  },
  {
    path: 'StudyTour/:city',
    component:StudyTourCityComponent
  },
  {
    path:'Internship/:city',
    component:InternshipCityComponent
  },
  {
    path:'StudyAbroad/:city',
    component:StudyAbroadCityComponent
  },
  {
    path:'Tests/:test',
    component:TestsTypeComponent
  },
  {
    path:'ELab/Programs',
    component:ElabsInfoComponent
  },
  {
    path:'ELab/Locations',
    component:ElabLocationsComponent
  },
  {
    path:'About/Gallery',
    component:AboutGalleryComponent
  },
  {
    path:'About/Terms',
    component:AboutTermsComponent
  },
  {
    path:'About/OurTeam',
    component:AboutOurteamComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
