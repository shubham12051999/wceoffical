import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutGalleryComponent } from './about-gallery/about-gallery.component';
import { AboutOurteamComponent } from './about-ourteam/about-ourteam.component';
import { AboutTermsComponent } from './about-terms/about-terms.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ElabComponent } from './elab/elab.component';
import { ElabLocationsComponent } from './elab-locations/elab-locations.component';
import { ElabInfoComponent } from './elab-info/elab-info.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InternshipComponent } from './internship/internship.component';
import { InternshipCityComponent } from './internship-city/internship-city.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { StudyAbroadCityComponent } from './study-abroad-city/study-abroad-city.component';
import { StudyToursComponent } from './study-tours/study-tours.component';
import { StudyToursCityComponent } from './study-tours-city/study-tours-city.component';
import { TestsComponent } from './tests/tests.component';
import { TestsTypeComponent } from './tests-type/tests-type.component';
 import { AboutComponent } from './home/about/about.component';
 import { CountriesComponent } from './home/countries/countries.component';
 import { EnquiryFormComponent } from './home/enquiry-form/enquiry-form.component';
 import { ServicesComponent } from './home/services/services.component';
 import { TestimonialsComponent } from './home/testimonials/testimonials.component';
 import { VideoBackgroundComponent } from './home/video-background/video-background.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewComponent } from './internship/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutGalleryComponent,
    AboutOurteamComponent,
    AboutTermsComponent,
    ContactusComponent,
    ElabComponent,
    ElabLocationsComponent,
    ElabInfoComponent,
    FaqsComponent,
    InternshipComponent,
    InternshipCityComponent,
    StudyAbroadComponent,
    StudyAbroadCityComponent,
    StudyToursComponent,
    StudyToursCityComponent,
    TestsComponent,
    TestsTypeComponent,
    AboutComponent,
    CountriesComponent,
    EnquiryFormComponent,
    ServicesComponent,
    TestimonialsComponent,
    VideoBackgroundComponent,
    FooterComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
