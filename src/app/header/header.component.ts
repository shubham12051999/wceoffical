import { Component, OnInit, NgModule,ViewChild, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpHeaderResponse } from '@angular/common/http';  
import { TestsTypeComponent } from "../tests-type/tests-type.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style1.css','./style2.css','./header.component.css'],
  // providers: [WceService]
})
export class HeaderComponent implements OnInit{
  logo="../../assets/images/logo.png";
  constructor(private roter:Router,){}
  getStudyAbroad(data){
    console.log(data)
    this.roter.navigate(['StudyAbroad/',data])
  }
  getInternship(city){
    console.log(city)
    this.roter.navigate(['Internship/',city])
  }
  getStudy(scity){
    console.log(scity)
    this.roter.navigate(['StudyTour',scity])
  }
  getTest(test){
    console.log(test)
    this.roter.navigate(['Tests/',test])
  }
  Elabs(info){

    console.log(info)
    this.roter.navigate(['ELab',info])
  }
  ngOnInit() {
  }

}
