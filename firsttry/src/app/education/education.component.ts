import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: any;

  constructor() { 
    this.education = jsonresume.resume.education;
  }

  ngOnInit(): void {
  }

}
