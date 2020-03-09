import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { VideoGameDetailComponent } from './components/video-game-detail/video-game-detail.component';
import { EmployeeComponent } from './components/employee/employee.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
