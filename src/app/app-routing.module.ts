import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillViewComponent } from './components/skill-view/skill-view.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeViewComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'skills/:id',
    component: SkillViewComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
