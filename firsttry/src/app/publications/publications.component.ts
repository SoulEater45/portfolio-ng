import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: any;

  constructor() {
    this.publications = jsonresume.resume.publications;
  }

  ngOnInit(): void {
  }

}
