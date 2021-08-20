import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  basics: any;
  name: string;
  summary: string;

  constructor() {
    this.basics = jsonresume.resume.basics;
    this.name = this.basics.name;
    this.summary = this.basics.summary;
  }

  ngOnInit(): void {
  }

}
