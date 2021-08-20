import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:any;

  constructor() { 
    this.skills = jsonresume.resume.skills;
  }

  ngOnInit(): void {
  }

}
