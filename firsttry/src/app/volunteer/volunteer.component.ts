import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  volunteer: any;

  constructor() { 
    this.volunteer = jsonresume.resume.volunteer;
  }

  ngOnInit(): void {
  }

}
