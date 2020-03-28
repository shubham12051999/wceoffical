import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { WceService } from "./../wce.service";
@Component({
  selector: 'app-study-abroad-city',
  templateUrl: './study-abroad-city.component.html',
  styleUrls: ['./study-abroad-city.component.css']
})
export class StudyAbroadCityComponent implements OnInit {

  // uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  uri=this.wce.uri
  getcityStudyAbroad(data){
    this.http.get(`${this.uri}/StudyAbroad/${data}`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
  }

}
