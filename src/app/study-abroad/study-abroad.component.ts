import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css']
})
export class StudyAbroadComponent implements OnInit {


  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  getStudyAbroad(){
    this.http.get(`${this.uri}/StudyAbroad`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
    this.getStudyAbroad()
  }

}
