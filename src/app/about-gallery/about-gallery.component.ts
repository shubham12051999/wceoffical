import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.css']
})
export class AboutGalleryComponent implements OnInit {

  constructor() { }
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
     // this.loadScript('http://www.some-library.com/library.js');
     this.loadScript('../../../../assets/js/gallery.js');
  }

}
