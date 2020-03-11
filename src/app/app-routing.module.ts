import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { VideoGameDetailComponent } from './components/video-game-detail/video-game-detail.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: 'video-games',
    component: VideoGamesComponent
  },
  {
    path: 'video-games/:id',
    component: VideoGameDetailComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeViewComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
