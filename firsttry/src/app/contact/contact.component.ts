import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  location: any;

  constructor() {
    this.location = jsonresume.resume.basics.location;
   }

  ngOnInit(): void {
  }

}
