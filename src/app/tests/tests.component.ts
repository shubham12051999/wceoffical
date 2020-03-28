import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  
  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  gettype(){
    this.http.get(`${this.uri}/Tests`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
    this.gettype();
  }

}
