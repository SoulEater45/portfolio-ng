import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faOrcid, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import * as fontawesome from '@fortawesome/free-brands-svg-icons';

declare function loadRive(): any;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  basics: any;
  name: string;
  summary: string;
  profiles: any;
  rive: any;
  icons: any;

  constructor() {
    this.basics = jsonresume.resume.basics;
    this.name = this.basics.name;
    this.summary = this.basics.summary;
    this.profiles = jsonresume.resume.basics.profiles;
    this.icons = [];
    for (let profile of this.profiles) {
      let icon = profile.network;
      icon = icon.split(' ');
      for (let [idx, i] of icon.entries()) {
        icon[idx] = i.charAt(0).toUpperCase() + i.substr(1).toLowerCase();
      }
      icon = icon.join('');
      this.icons.push((fontawesome as { [key: string]: any })["fa" + icon]);
    }
    // this.icons = [fontawesome["faResearchgate"],
    //   fontawesome["faOrcid"],
    //   fontawesome["faGithub"],
    //   fontawesome["faLinkedin"]];

    // this.profiles = this.profiles.sort(function (a:any,b:any) {
    //   return a.network.localeCompare(b.network)}
    // );
    // this.icons = this.icons.sort(function (a:any,b:any) {
    //   return a.iconName.localeCompare(b.iconName)}
    // );
  }

  ngOnInit(): void {
    loadRive();
  }

}
