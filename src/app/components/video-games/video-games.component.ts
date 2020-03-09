import { Component, OnInit } from '@angular/core';
import { VideoGameState } from '../../state/videoGame.state';
import { Select, Store } from '@ngxs/store';
import { GetVideoGames } from '../../actions/videoGame.actions';
import { Observable } from 'rxjs';
import { VideoGame } from '../../model/videoGame.model';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {
  @Select(VideoGameState.getVideoGamesList) videoGames: Observable<VideoGame[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('Component trying to fetch video games...');
    this.store.dispatch(new GetVideoGames()).subscribe(result => {
      console.log(result);
    });
  }
}
