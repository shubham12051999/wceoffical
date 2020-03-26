import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-study-tours',
  templateUrl: './study-tours.component.html',
  styleUrls: ['./study-tours.component.css']
})
export class StudyToursComponent implements OnInit {

  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  getStudyTour(){
    this.http.get(`${this.uri}/StudyTour`) .subscribe(function(res){console.log(res)});  

  }

  ngOnInit(): void {
    this.getStudyTour()
  }

}
