import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {OwlModule} from 'ngx-owl-carousel';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { TestsComponent } from './tests/tests.component';
import { InternshipComponent } from './internship/internship.component';
import { StudyToursComponent } from './study-tours/study-tours.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { ElabComponent } from './elab/elab.component';
import { FAQSComponent } from './faqs/faqs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudyTourCityComponent } from './study-tour-city/study-tour-city.component';
import { TestsTypeComponent } from './tests-type/tests-type.component';
import { InternshipCityComponent } from './internship-city/internship-city.component';
import { StudyAbroadCityComponent } from './study-abroad-city/study-abroad-city.component';
import { VideoBackgroundComponent } from './home/video-background/video-background.component';
import { AboutComponent } from './home/about/about.component';
import { ServicesComponent } from './home/services/services.component';
import { CountriesComponent } from './home/countries/countries.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { EnquiryFormComponent } from './home/enquiry-form/enquiry-form.component';
import { ElabsInfoComponent } from './elabs-info/elabs-info.component';
import { OverviewComponent } from './study-tours/overview/overview.component';
import { AboutGalleryComponent } from './about-gallery/about-gallery.component';
import { AboutOurteamComponent } from './about-ourteam/about-ourteam.component';
import { AboutTermsComponent } from './about-terms/about-terms.component';
import { WceService } from "./wce.service";
import { ElabLocationsComponent } from './elab-locations/elab-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    HomeComponent,
    TestsComponent,
    InternshipComponent,
    StudyToursComponent,
    StudyAbroadComponent,
    ElabComponent,
    FAQSComponent,
    StudyTourCityComponent,
    TestsTypeComponent,
    InternshipCityComponent,
    StudyAbroadCityComponent,
    VideoBackgroundComponent,
    AboutComponent,
    ServicesComponent,
    CountriesComponent,
    TestimonialsComponent,
    EnquiryFormComponent,
    ElabsInfoComponent,
    OverviewComponent,
    AboutGalleryComponent,
    AboutOurteamComponent,
    AboutTermsComponent,
    ElabLocationsComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
