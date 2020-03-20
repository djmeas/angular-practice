import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from './state//employee.state';
import { SkillState } from './state/skill.state';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './components/skills/skills.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { PrettyDateDirective } from './directives/pretty-date.directive';
import { SkillTextPipe } from './pipes/skill-text.pipe';
import { SkillViewComponent } from './components/skill-view/skill-view.component';
import { EmployeeMiniCardComponent } from './components/employee-mini-card/employee-mini-card.component';
import { ProjectAllocationBarComponent } from './components/project-allocation-bar/project-allocation-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { InfoSidebarComponent } from './components/info-sidebar/info-sidebar.component';
import { ProjectAllocationDetailsComponent } from './components/project-allocation-details/project-allocation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeViewComponent,
    SkillsComponent,
    LoadingScreenComponent,
    PrettyDateDirective,
    SkillTextPipe,
    SkillViewComponent,
    EmployeeMiniCardComponent,
    ProjectAllocationBarComponent,
    ProjectsComponent,
    HomeComponent,
    InfoSidebarComponent,
    ProjectAllocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([EmployeeState, SkillState]),
    HttpClientModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxGraphModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
