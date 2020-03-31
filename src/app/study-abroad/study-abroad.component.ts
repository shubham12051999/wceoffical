import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { WceService } from "./../wce.service";

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css']
})
export class StudyAbroadComponent implements OnInit {


  uri=this.wce.uri;
  constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  getStudyAbroad(){
    this.http.get(`${this.uri}/StudyAbroad`) .subscribe(function(res){console.log(res)});  
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
    this.getStudyAbroad()
    this.loadScript('../../assets/js/script5.js');
  }

}