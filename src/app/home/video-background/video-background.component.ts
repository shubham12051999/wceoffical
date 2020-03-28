import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./style1.css','./video-background.component.css']
})
export class VideoBackgroundComponent implements OnInit {
  video="../../../assets/images/1358301520.mp4"

  constructor() { }

  ngOnInit(): void {
  }

}
