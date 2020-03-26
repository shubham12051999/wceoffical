import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-internship-city',
  templateUrl: './internship-city.component.html',
  styleUrls: ['./internship-city.component.css']
})
export class InternshipCityComponent implements OnInit {

  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  getcityInternship(city){
    this.http.get(`${this.uri}/Internship/${city}`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
  }

}
