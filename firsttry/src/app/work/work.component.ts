import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: any;

  constructor() { 
    this.work = jsonresume.resume.work;
  }

  ngOnInit(): void {
  }

}
