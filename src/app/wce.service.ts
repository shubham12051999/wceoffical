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

  constructor(private roter:Router,private http:HttpClient){}
  uri='http://localhost:4000'

}
