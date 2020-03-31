import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { WceService } from "./../wce.service";
@Component({
  selector: 'app-study-tours-city',
  templateUrl: './study-tours-city.component.html',
  styleUrls: ['./study-tours-city.component.css']
})
export class StudyToursCityComponent implements OnInit {

  // uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  uri=this.wce.uri
  getcityStudyTour(scity){
    this.http.get(`${this.uri}/StudyTour/${scity}`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
  }

}
