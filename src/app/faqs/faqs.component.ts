import { Component, OnInit} from '@angular/core';
// import { Script } from 'vm';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./tailwind.css','./faqs.component.css']
})
export class FaqsComponent implements OnInit {

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
    this.loadScript('../../../../assets/js/faqs.js');
  }

}
