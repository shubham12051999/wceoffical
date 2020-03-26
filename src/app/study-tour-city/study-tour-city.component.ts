import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-study-tour-city',
  templateUrl: './study-tour-city.component.html',
  styleUrls: ['./study-tour-city.component.css']
})
export class StudyTourCityComponent implements OnInit {

  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  getcityStudyTour(){
    this.http.get(`${this.uri}${this.roter.url}`) .subscribe(function(res){console.log(res)});  
    console.log(this.roter.url);
  }
  ngOnInit() {
    this.getcityStudyTour();

  }
}
