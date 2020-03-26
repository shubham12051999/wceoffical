import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  

@Component({
  selector: 'app-elabs-info',
  templateUrl: './elabs-info.component.html',
  styleUrls: ['./elabs-info.component.css']
})
export class ElabsInfoComponent implements OnInit {

  uri='http://localhost:4000'
  constructor(private roter:Router, private http: HttpClient) { }
  elabinfo(){
    this.http.get(`${this.uri}${this.roter.url}`) .subscribe(function(res){console.log(res)});  
    console.log(this.roter.url);
  }
  ngOnInit() {
    this.elabinfo();

  }
}
