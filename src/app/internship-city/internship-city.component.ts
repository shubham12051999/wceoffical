import { Component, OnInit ,OnChanges} from '@angular/core';
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
  getcityInternship(){
    this.http.get(`${this.uri}${this.roter.url}`) .subscribe(function(res){console.log(res)});  
    console.log(this.roter.url);
  }

  ngOnInit() {
    this.getcityInternship();

  }
}
