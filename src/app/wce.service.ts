import { Injectable, Input } from '@angular/core';
// import {  } from "module";
import { StudyAbroadCityComponent } from "./study-abroad-city/study-abroad-city.component";
import { ElabsInfoComponent } from "./elabs-info/elabs-info.component";
import { InternshipCityComponent } from "./internship-city/internship-city.component";
import { StudyTourCityComponent } from "./study-tour-city/study-tour-city.component";
import { TestsTypeComponent } from "./tests-type/tests-type.component";
@Injectable({
  providedIn: 'root'
})
export class WceService {
  // @Input()ps:StudyAbroadCityComponent
  
  constructor(private ps:StudyAbroadCityComponent) { }
  getcity(){
    // let ps=new StudyAbroadCityComponent()
    this.ps.getcityStudyAbroad()
    console.log('hety i have request')
  }
}
