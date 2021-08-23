import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { WaveDividerComponent } from './wave-divider/wave-divider.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ProfilesComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    AwardsComponent,
    PublicationsComponent,
    ProjectsComponent,
    VolunteerComponent,
    SkillsComponent,
    ContactComponent,
    WaveDividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
