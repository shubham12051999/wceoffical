import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { WceService } from "./../wce.service";
@Component({
  selector: 'app-study-tours',
  templateUrl: './study-tours.component.html',
  styleUrls: ['./study-tours.component.css']
})
export class StudyToursComponent implements OnInit {

  uri=this.wce.uri
  constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  getStudyTour(){
    this.http.get(`${this.uri}/StudyTour`) .subscribe(function(res){console.log(res)});  

  }

  
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    this.getStudyTour()
    this.loadScript('../../assets/js/script5.js');

  }

}