import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgURL: string;
  summary: string;
  location: any;

  constructor() {
    this.imgURL = jsonresume.resume.basics.image;
    this.summary = jsonresume.resume.basics.summary;
    this.location = jsonresume.resume.basics.location;
  }

  ngOnInit(): void {
  }

}
