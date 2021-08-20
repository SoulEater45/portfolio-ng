import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles: any;

  constructor() {
    this.profiles = jsonresume.resume.basics.profiles;
  }

  ngOnInit(): void {
  }

}
