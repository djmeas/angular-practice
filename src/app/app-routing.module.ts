import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameDetailComponent } from './video-game-detail/video-game-detail.component';

const routes: Routes = [
  {
    path: 'video-games',
    component: VideoGamesComponent
  },
  {
    path: 'video-games/:id',
    component: VideoGameDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
