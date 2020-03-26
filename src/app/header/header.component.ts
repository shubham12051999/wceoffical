import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

import { TestsTypeComponent } from "../tests-type/tests-type.component";
import { InternshipCityComponent } from "../internship-city/internship-city.component";
import {  StudyAbroadCityComponent } from "../study-abroad-city/study-abroad-city.component";
import { StudyToursCityComponent } from "../study-tours-city/study-tours-city.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style1.css','./style2.css','./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()ha=new TestsTypeComponent(this.roter,this.http);hb=new StudyAbroadCityComponent(this.roter,this.http);hc=new StudyToursCityComponent(this.roter,this.http);hd=new InternshipCityComponent(this.roter,this.http);
  logo="../../assets/images/logo.png";
  constructor(private roter:Router,private http:HttpClient){}
  getStudyAbroad(data){
    this.hb.getcityStudyAbroad(data)
    this.roter.navigate(['StudyAbroad/',data])
  }
  getInternship(city){
    this.hd.getcityInternship(city)
    this.roter.navigate(['Internship/',city])
  }
  getStudy(scity){
    this.hc.getcityStudyTour(scity)
    this.roter.navigate(['StudyTour',scity])
  }
  getTest(test){
    this.ha.gettype(test)
    this.roter.navigate(['Tests/',test])
  }
  ngOnInit(): void {
    // this.getc()
  }

}
