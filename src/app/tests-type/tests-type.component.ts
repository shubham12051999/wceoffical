import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  


@Component({
  selector: 'app-tests-type',
  templateUrl: './tests-type.component.html',
  styleUrls: ['./tests-type.component.css']
})
export class TestsTypeComponent implements OnInit {
  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  gettype(){
    this.http.get(`${this.uri}${this.roter.url}`) .subscribe(function(res){console.log(res)});  
    console.log(this.roter.url);
  }

  ngOnInit() {
    this.gettype();

  }

}
