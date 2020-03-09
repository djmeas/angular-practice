import { Component, OnInit } from '@angular/core';
import { VideoGameState } from '../../state/videoGame.state';
import { Select, Store } from '@ngxs/store';
import { GetVideoGame } from '../../actions/videoGame.actions';
import { Observable } from 'rxjs';
import { VideoGame } from '../../model/videoGame.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-game-detail',
  templateUrl: './video-game-detail.component.html',
  styleUrls: ['./video-game-detail.component.scss']
})
export class VideoGameDetailComponent implements OnInit {
  // @Select(VideoGameState.getVideoGame) videoGame: Observable<VideoGame>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  public videoGame = null;

  ngOnInit(): void {
    console.log('Component trying to fetch video game details...');
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetVideoGame(params.id)).subscribe(result => {
        this.videoGame = result.videoGames.viewDetail;
        console.log(this.videoGame);
      });
    });
  }
}
