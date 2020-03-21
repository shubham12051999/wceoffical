import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./style1.css','./video-background.component.css']
})
export class VideoBackgroundComponent implements OnInit {
  video="../../../assets/images/1358301520.mp4"
  // video="../../"
  // video;
  
  constructor() { }

  ngOnInit() {
    // this.video="https://vod-progressive.akamaized.net/exp=1584798496~acl=%2A%2F1358301520.mp4%2A~hmac=5c81f6c5b80fe525d5108f67cfd4b6459496e77f34827e82421ecc79762fe46c/vimeo-prod-skyfire-std-us/01/3134/13/340670744/1358301520.mp4"
  }

}
