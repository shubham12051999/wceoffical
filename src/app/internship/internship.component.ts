import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';  
import { WceService } from "./../wce.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {


  constructor(private roter:Router, private http: HttpClient,private wce:WceService) { }
  uri=this.wce.uri
  getInternship(){
    this.http.get(`${this.uri}/Internship`) .subscribe(function(res){console.log(res)});  
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
    this.getInternship();
    this.loadScript('../../assets/js/script5.js');
  }

}
