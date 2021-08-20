import { Component, OnInit } from '@angular/core';
import * as jsonresume from '../global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor() { 
    this.projects = jsonresume.resume.projects;
  }

  ngOnInit(): void {
  }

}
