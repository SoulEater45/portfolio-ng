import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  awards: any;

  constructor() { 
    this.awards = jsonresume.resume.awards;
  }

  ngOnInit(): void {
  }

}
