import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { WceService } from "./../wce.service";
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  
   constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  uri=this.wce.uri
  gettype(){
    this.http.get(`${this.uri}/Tests`) .subscribe(function(res){console.log(res)});  
  }

  ngOnInit(): void {
    this.gettype();
  }

}
