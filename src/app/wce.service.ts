import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { Router } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { TestsTypeComponent } from "./tests-type/tests-type.component";
import { InternshipCityComponent } from "./internship-city/internship-city.component";
import {  StudyAbroadCityComponent } from "./study-abroad-city/study-abroad-city.component";
import { StudyToursCityComponent } from "./study-tours-city/study-tours-city.component";
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
@Injectable({
  providedIn: 'root'
})
export class WceService { 
  uri='http://localhost:4000'
  constructor(private roter:Router,private http:HttpClient){}
  @Input()ha=new TestsTypeComponent(this.roter,this.http);hb=new StudyAbroadCityComponent(this.roter,this.http);hc=new StudyToursCityComponent(this.roter,this.http);hd=new InternshipCityComponent(this.roter,this.http);
  getTestsHead(test3){
    this.http.get(`${this.uri}/Tests/${test3}`) 
    // this.http.get(`${this.uri}/Tests/${test3}`) 
    .subscribe(function(res){
      
    });  
  }
  getStudyHead(test){
    this.http.get(`${this.uri}/StudyTour/${test}`) 
    .subscribe(function(res){
    });  
  }

  getInternshipHead(test1){
    this.http.get(`${this.uri}/Internship/${test1}`) 
    .subscribe(function(res){
      
    });  
  }
  getStudyAbroadHead(test2){
    this.http.get(`${this.uri}/StudyAbroad/${test2}`) 
    .subscribe(function(res){
    });  
  }


}
