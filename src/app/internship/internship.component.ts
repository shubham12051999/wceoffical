import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {



  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  getInternship(){
    this.http.get(`${this.uri}/Internship`) .subscribe(function(res){console.log(res)});  
  }


  ngOnInit(): void {
    this.getInternship();
  }

}
